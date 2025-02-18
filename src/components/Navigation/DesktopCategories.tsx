import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { isMobile } from "../../stores/NavigationStore";
import { FaAngleDown } from "react-icons/fa6";

import DesktopMegaMenu from "./DesktopMegaMenu";

interface category {
  slug: string;
  name: string;
  url: string;
}

interface DesktopCategoriesProps {
  categories: category[];
  subcategories: category[];
}

const DesktopCategories = ({
  categories,
  subcategories,
}: DesktopCategoriesProps) => {
  const $isMobile = useStore(isMobile);
  if ($isMobile) return null;

  const [menuVisible, setMenuVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("none");

  const handleScroll = () => {
    const position = window.pageYOffset;

    setScrollPosition((prev) => {
      if (position > prev + 45) setScrollDirection("down");
      if (position < prev - 45) setScrollDirection("up");
      if (position === 0) setScrollDirection("none");

      if (position > prev + 45 || position < prev - 45 || position === 0) {
        return position;
      }
      return prev;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDesktopMenu = (value: boolean) => {
    setMenuVisible(value);
  };

  if (scrollDirection !== "down")
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
            {categories.map((category: any, index: number) => (
              <a href={`/listing/${category.slug}`} key={index}>
                <p
                  className="h-full flex justify-center items-center text-xs text-gray-400 font-semibold cursor-pointer"
                  key={index}
                >
                  {category.name}
                </p>
              </a>
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
