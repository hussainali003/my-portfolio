import { useEffect, useState } from "react";

import { MdOutlineZoomOutMap } from "react-icons/md";

import Modal from "react-modal";

import javascriptCertificate from "../../assets/images/javascriptCertificate.png";
import responsiveDesignCertificate from "../../assets/images/responsiveDesignCertificate.png";

export default function Certificate() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(certificateList[0]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const checkSize = () => {
      setIsButtonDisabled(window.innerWidth >= 1024); // lg
    };

    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleClick = (img: { id: number; img: string; alt: string }) => {
    setSelectedImage(img);
    setIsOpen(true);
  };

  return (
    <div
      className={`flex flex-col lg:flex-row flex-1 gap-4 md:mx-28 transition-all duration-1000 ${visible ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"}`}
    >
      {certificateList.map((item) => (
        <div key={item.id} className="flex-1 rounded-2xl p-6 bg-[#191737] cursor-pointer">
          <button
            type="button"
            disabled={!isButtonDisabled}
            onClick={() => handleClick(item)}
            className="relative cursor-pointer transition-transform duration-300 hover:-translate-y-1.25 group"
          >
            <div
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white hidden group-hover:hidden lg:group-hover:block`}
            >
              <MdOutlineZoomOutMap className="text-3xl mx-auto" />
              <h3 className="font-bold text-2xl mt-1">View Certificate</h3>
            </div>
            <img src={item.img} className="opacity-75" alt={item.alt} />
          </button>
        </div>
      ))}
      <Modal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)", zIndex: 101 },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <img src={selectedImage.img} alt={selectedImage.alt} className="h-full w-full" />
      </Modal>
    </div>
  );
}

const certificateList = [
  {
    id: 1,
    img: responsiveDesignCertificate,
    alt: "responsive web design",
  },
  {
    id: 2,
    img: javascriptCertificate,
    alt: "javascript algorithms",
  },
];
