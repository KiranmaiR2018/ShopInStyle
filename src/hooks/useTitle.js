// Using useEffect to update the document.title on each page
// useEffect function will be using a dependency (title)
import { useEffect } from "react";
export const useTitle = (title) => {
  // using dependency title as parameter
  useEffect(() => {
    document.title = `${title} | ShopInStyle`;
  }, [title]);
  return null;
};
