export const LinkToPixbaySite = (pageURL) => {
  const link = document.createElement("a");
  link.href = pageURL;
  //   link.href =
  link.target = "_blank";
  link.innerHTML = "Go to Pixbay site";
  const btn = document.createElement("button");
  btn.className =
    "bg-slate-700 text-slate-200 mx-2  py-2 px-3 rounded-lg hover:text-slate-700 hover:bg-slate-300 font-bold whitespace-nowrap";
  btn.appendChild(link);
  return btn;
};
