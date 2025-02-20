import { actions } from "astro:actions";
import { isMobile } from "../stores/NavigationStore";
import { useStore } from "@nanostores/react";
const { data, error } = await actions.getCategories();
const categories = data.slice(0,7)

const CategoryButtons = () => {

  const mobile = useStore(isMobile)

  if (categories)
    return (
      <div className="w-full flex justify-center gap-8 mt-8">
        {categories.map((category: any) => (
          <a key={category.slug} href={`/listing/${category.slug}`} className="flex flex-col gap-2 justify-start items-center text-center w-18 ">
            <div className="w-18 h-18 bg-gray-300 rounded-full p-2"></div>
            {category.name}
          </a>
        ))}
      </div>
    );
};

export default CategoryButtons;
