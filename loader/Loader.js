export const Loader = () => {
  const elementContainer = document.createElement("div");
  elementContainer.className =
    "flex space-x-2 justify-center items-center bg-white h-screen w-full";

  const dot1 = document.createElement("div");
  dot1.className =
    "h-8 w-8 bg-slate-600 rounded-full animate-bounce [animation-delay:-0.3s]";

  const dot2 = document.createElement("div");
  dot2.className =
    "h-8 w-8 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.15s]";

  const dot3 = document.createElement("div");
  dot3.className = "h-8 w-8 bg-slate-600 rounded-full animate-bounce";

  elementContainer.appendChild(dot1);
  elementContainer.appendChild(dot2);
  elementContainer.appendChild(dot3);
  return elementContainer;
};
