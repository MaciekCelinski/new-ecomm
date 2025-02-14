// import { Link } from 'react-router-dom';

interface Subcategory {
  slug: string;
  name: string;
  url: string;
}

interface MenuProps {
  toggleMenu: Function;
  subcategories: Subcategory[];
}

const Menu = ({ toggleMenu, subcategories }: MenuProps) => {
  return (
    <div
      className="absolute h-80 w-full border-y-1 border-gray-300 bg-white z-40 p-6 grid grid-cols-5"
      onMouseEnter={() => toggleMenu(true)}
      onMouseLeave={() => toggleMenu(false)}
    >
      {subcategories.map((cat) => (
        // <Link to={'/'+ cat.slug} key={cat.slug}><span>{cat.name}</span></Link>
        <a href={'/listing/'+ cat.slug} key={cat.slug}><span>{cat.name}</span></a>
      ))}
    </div>
  );
};

export default Menu;
