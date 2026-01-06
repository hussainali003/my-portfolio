import { useState } from "react";

function Header() {
  const [active, setActive] = useState<string>(itemList[0]);

  return (
    <div className="fixed top-0 right-0 w-full px-12 py-6">
      <div className="flex justify-between">
        <a
          href="#Home"
          className="font-bold text-xl bg-linear-to-r from-[#a855f7] to-[#6366f1]  bg-clip-text text-transparent"
        >
          Hussain Ali
        </a>
        <ul className="flex gap-6">
          {itemList.map((item) => (
            <li key={item} className="group">
              <a
                href={`#${item}`}
                onClick={() => setActive(item)}
                className={`font-bold text-sm text-[#e3d6fa] ${active === item && "bg-linear-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent"}`}
              >
                {item}
              </a>

              <div
                className={`h-0.5 bg-linear-to-r from-[#a855f7] to-[#6366f1] transition-all duration-500
                group-hover:w-full
                ${active === item ? "w-full" : "w-0"}
                `}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const itemList = ["Home", "About", "Portfolio", "Contact"];

export default Header;
