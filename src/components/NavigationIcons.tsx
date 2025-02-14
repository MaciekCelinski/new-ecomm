import { FaRegHeart } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";

import { FaUserGear } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";

const NavigationIcons = () => {
  return (
    <div className="w-full flex justify-end pt-4 pr-20 text-lg gap-8 text-gray-600">
      <a href="/favorites"><FaRegHeart className="cursor-pointer" /></a>
      <a href="/profile"><FaRegUser className="cursor-pointer" /></a>
      <a href="/cart"><FaCartShopping className="cursor-pointer" /></a>
    </div>
  )
}

export default NavigationIcons