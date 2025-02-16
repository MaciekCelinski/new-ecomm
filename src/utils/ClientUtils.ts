import { isMobile } from "../stores/NavigationStore";

export const setIsMobile = () => {
  const screenWidth = window?.screen.width;
  if (screenWidth) isMobile.set(screenWidth > 768 ? false : true);
};
