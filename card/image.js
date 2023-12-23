export const Image = (webformatURL) => {
  const element = document.createElement("img");
  element.src = webformatURL;
  element.alt = "image";
  element.className = "h-auto w-full";
  element.draggable = false;
  return element;
};
