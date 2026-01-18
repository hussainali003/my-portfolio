import { FaArrowLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate, useParams } from "react-router";

export default function Header() {
  const navigate = useNavigate();
  const { name } = useParams();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex mx-4 my-4 sm:my-12 2xl:mx-42 self-start items-center gap-4">
      <button
        type="button"
        onClick={handleGoBack}
        className="flex items-center justify-center gap-1 sm:gap-2 py-1.5 sm:py-2.5 px-3 sm:px-5 text-white rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 cursor-pointer group"
      >
        <FaArrowLeft className="size-3 sm:size-3.5 transition-transform duration-500 group-hover:-translate-x-1.25" />
        <h3 className="text-sm sm:text-base">Back</h3>
      </button>
      <div className="flex items-center justify-center gap-1 text-gray-300/45">
        <h3 className="text-sm sm:text-base">Projects</h3>
        <FaChevronRight size={10} />
      </div>
      <h3 className="text-sm sm:text-base text-white">{name}</h3>
    </div>
  );
}
