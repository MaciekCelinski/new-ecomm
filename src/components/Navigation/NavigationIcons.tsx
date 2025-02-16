import { FaRegHeart } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";

import { FaUserGear } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { useStore } from "@nanostores/react";
import { isMobileMenuOpen } from "../../stores/NavigationStore";

const NavigationIcons = () => {
  const $isMobileMenuOpen = useStore(isMobileMenuOpen);

  const toggleMobileMenu = () => {
    isMobileMenuOpen.set(!$isMobileMenuOpen);
  };

  return (
    <div className="w-full flex justify-end md:pt-4 pr-5 md:pr-20 text-lg gap-4 md:gap-8 text-gray-600">
      <a href="/favorites">
        <FaRegHeart className="cursor-pointer" />
      </a>
      <a href="/profile">
        <FaRegUser className="cursor-pointer" />
      </a>
      <a href="/cart">
        <FaCartShopping className="cursor-pointer" />
      </a>
      <AiOutlineMenu
        className="md:hidden cursor-pointer"
        onClick={toggleMobileMenu}
      />
    </div>
  );
};

export default NavigationIcons;
