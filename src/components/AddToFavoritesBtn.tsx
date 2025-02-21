import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";

const AddToFavoritesBtn = (product:any) => {
  const [addedToFavorites, setAddedToFavorites] = useState(false);

  const toggleAddToFavorites = () => {
    setAddedToFavorites((prev) => !prev);
  };

  if (addedToFavorites)
    return <FaHeart className="cursor-pointer text-xl text-red-800" onClick={toggleAddToFavorites} />;
  return <FaRegHeart className="cursor-pointer text-xl" onClick={toggleAddToFavorites} />;
};
export default AddToFavoritesBtn;
