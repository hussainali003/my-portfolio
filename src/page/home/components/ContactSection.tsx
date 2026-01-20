import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

import { useInViewAnimation } from "../../../hooks/useInViewAnimation";

function ContactSection() {
  const { ref, visible } = useInViewAnimation();

  return (
    <div
      id="Contact"
      ref={ref}
      className={`flex flex-1 flex-col gap-12 pt-10 sm:pt-20 transition-all duration-1500
        ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-40"}
    `}
    >
      <h1 className="font-bold text-center text-4xl sm:text-5xl bg-linear-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent">
        Contact Me
      </h1>
      <div className="lg:w-1/2 xl:w-1/3 mx-4 lg:mx-auto p-6 sm:p-10 rounded-2xl bg-white/5">
        <div className="p-6 sm:p-8 rounded-2xl bg-white/10">
          <div className="flex lg:flex-1/2 flex-col gap-3.5 p-6 rounded-2xl text-white bg-white/20">
            <div className="flex items-center gap-2 px-2 mb-2">
              <div className="h-1 w-8 rounded-full bg-linear-to-r from-[#a855f7] to-[#6366f1] "></div>
              <h1 className="font-medium text-base sm:text-xl text-white">Connect with me</h1>
            </div>
            {contactList.map((item) => (
              <a
                target="_blank"
                href={item.href}
                key={item.id}
                className="flex flex-1 items-center gap-3 p-2 sm:p-3 rounded-xl border border-white/30 bg-white/20 cursor-pointer group"
              >
                <div
                  className={`p-3 rounded-sm ${item.color} transition-all duration-300 group-hover:scale-110`}
                >
                  {item.icon}
                </div>
                <div>
                  <h1 className="text-start font-bold text-base sm:text-lg">{item.title}</h1>
                  <h4 className="text-start text-sm text-gray-400">{item.description}</h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const contactList = [
  {
    id: 1,
    title: "Let's Connect",
    description: "on Linkedin",
    icon: <FaLinkedinIn className="text-lg sm:text-xl text-cyan-500" />,
    href: "https://www.linkedin.com/in/hussain-ali-755120295/",
    color: "bg-cyan-500/15",
  },
  {
    id: 2,
    title: "Github",
    description: "@hussainali003",
    icon: <FaGithub className="text-lg sm:text-xl" />,
    href: "https://github.com/hussainali003",
    color: "bg-white/15",
  },
  {
    id: 3,
    title: "Facebook",
    description: "@Hussain Ali",
    icon: <FaFacebookF className="text-lg sm:text-xl text-blue-400" />,
    href: "https://www.facebook.com/profile.php?id=100028481423294",
    color: "bg-blue-400/15",
  },
];

export default ContactSection;
