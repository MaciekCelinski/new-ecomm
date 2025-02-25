import { atom, map, deepMap, task } from "nanostores";
// import type { PreinitializedWritableAtom } from "nanostores";

// export const isMobile: PreinitializedWritableAtom<boolean | null> = atom(null);
export const isMobile = atom(null);
export const isMobileMenuOpen = atom(false);
export const navCategories = map([]);
export const cartProductsCount = atom(0);
export const cartStore = deepMap(undefined);

export const categoryStore = task(async () => {
  const response = fetch("https://dummyjson.com/products/categories");
  const categories = (await response).json();
  return categories;
});
