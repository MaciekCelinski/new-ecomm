import { atom, map, deepMap } from "nanostores";
// import type { PreinitializedWritableAtom } from "nanostores";

// export const isMobile: PreinitializedWritableAtom<boolean | null> = atom(null);
export const isMobile = atom(false);
export const isMobileMenuOpen = atom(false);
export const navCategories = map([])
export const cartProductsCount = atom(0);
export const cartStore = deepMap(undefined);
