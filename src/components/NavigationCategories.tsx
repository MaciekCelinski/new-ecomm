import { Suspense, useState } from "react";
import Menu from "./Menu";

import { FaAngleDown } from "react-icons/fa6";

interface subcategory {
  slug: string;
  name: string;
  url: string;
}

const NavigationCategories = ({
  categories,
  subcategories,
}: {
  categories: string[];
  subcategories: subcategory[];
}) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = (value: boolean) => {
    setMenuVisible(value);
  };

  return (
    <>
      <div className="h-12 pl-[15%] -mt-1 bg-white ">
        <div
          className="h-full flex max-w-fit gap-4"
          // onMouseLeave={() => toggleMenu(false)}
        >
          <Suspense fallback={<p
              className="h-full flex justify-center items-center text-xs text-velo-green font-semibold cursor-pointer">LOADING...</p>}>
            <p
              className="h-full flex justify-center items-center text-xs text-velo-green font-semibold cursor-pointer"
              key={"index"}
              onMouseEnter={() => toggleMenu(true)}
              onMouseLeave={() => toggleMenu(false)}
            >
              Wszystkie kategorie <FaAngleDown />
            </p>
            {categories.map((category: string, index: number) => (
              <p
                className="h-full flex justify-center items-center text-xs text-gray-400 font-semibold cursor-pointer"
                key={index}
                // onMouseEnter={() => toggleMenu(true)}
              >
                {category}
              </p>
            ))}
          </Suspense>
        </div>
      </div>
      {menuVisible ? (
        <Menu toggleMenu={toggleMenu} subcategories={subcategories} />
      ) : null}
    </>
  );
};

export default NavigationCategories;
