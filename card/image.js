export const image = (webformatURL) => {
  const element = document.createElement("img");
  element.src = webformatURL;
  element.alt = "image";
  element.className = "h-[400px] w-[500px]";
  element.draggable = false;
  return element;
};
