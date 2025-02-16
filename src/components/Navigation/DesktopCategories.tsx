import { useState } from "react";
import { useStore } from "@nanostores/react";
import { isMobile } from "../../stores/NavigationStore";
import { FaAngleDown } from "react-icons/fa6";

import DesktopMegaMenu from "./DesktopMegaMenu";

interface subcategory {
  slug: string;
  name: string;
  url: string;
}

interface DesktopCategoriesProps {
  categories: string[];
  subcategories: subcategory[];
}

const DesktopCategories = ({
  categories,
  subcategories,
}: DesktopCategoriesProps) => {
  
  const $isMobile = useStore(isMobile);
  if ($isMobile) return null;

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleDesktopMenu = (value: boolean) => {
    setMenuVisible(value);
  };

  return (
    <>
      <div className="h-12 pl-[15%] -mt-1 bg-white ">
        <div className="h-full flex max-w-fit gap-4">
          <p
            className="h-full flex justify-center items-center text-xs text-velo-green font-semibold cursor-pointer"
            key={"index"}
            onMouseEnter={() => toggleDesktopMenu(true)}
            onMouseLeave={() => toggleDesktopMenu(false)}
          >
            Wszystkie kategorie <FaAngleDown />
          </p>
          {categories.map((category: string, index: number) => (
            <p
              className="h-full flex justify-center items-center text-xs text-gray-400 font-semibold cursor-pointer"
              key={index}
            >
              {category}
            </p>
          ))}
        </div>
      </div>
      {menuVisible ? (
        <DesktopMegaMenu
          toggleMenu={toggleDesktopMenu}
          subcategories={subcategories}
        />
      ) : null}
    </>
  );
};

export default DesktopCategories;
