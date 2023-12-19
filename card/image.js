export const image = (webformatURL) => {
  const element = document.createElement("img");
  element.src = webformatURL;
  element.alt = "image";
  element.className = "rounded-xl h-[380px] w-full hover:cursor-pointer";
  element.draggable = false;
  return element;
};
