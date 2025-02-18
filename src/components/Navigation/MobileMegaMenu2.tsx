import { isMobileMenuOpen, isMobile } from "../../stores/NavigationStore";
import { useStore } from "@nanostores/react";
import { IoCloseSharp } from "react-icons/io5";

interface Subcategory {
  slug: string;
  name: string;
  url: string;
}

interface MenuProps {
  subcategories: Subcategory[];
}

const MobileMegaMenu2 = ({ subcategories }: MenuProps) => {
  const $isMobileMenuOpen = useStore(isMobileMenuOpen);
  const $isMobile = useStore(isMobile);
  if (!$isMobile) return null;

  const toggleMobileMenu = () => isMobileMenuOpen.set(false);

  if ($isMobileMenuOpen)
    return (
      <div className="sticky h-screen top-0 bottom-0 left-0 right-0 border-y-1 border-gray-300 bg-white z-40 p-6 overflow-hidden">
        <IoCloseSharp
          className="absolute top-5 right-5 text-2xl cursor-pointer"
          onClick={toggleMobileMenu}
        />
        <div className="mt-12 grid">
          <h1 className="mb-3 text-xl">Kategorie produktowe</h1>
          {subcategories.map((cat) => (
            // <Link to={'/'+ cat.slug} key={cat.slug}><span>{cat.name}</span></Link>
            <a href={"/listing/" + cat.slug} key={cat.slug}>
              <span>{cat.name}</span>
            </a>
          ))}
        </div>
      </div>
    );
};

export default MobileMegaMenu2;
