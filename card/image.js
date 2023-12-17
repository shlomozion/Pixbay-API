export const image = (webformatURL) => {
  const element = document.createElement("img");
  element.src = webformatURL;
  element.alt = "image";
  element.className = "rounded-xl h-[65%]";
  element.draggable = false;
  return element;
};
