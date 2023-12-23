export const CloseBtn = () => {
  const closeBtn = document.createElement("button");
  closeBtn.className = `absolute right-0 bg-transparent text-white md:text-slate-600 mx-2 my-0.5 py-1 px-2 rounded-lg hover:border hover:border-slate-600  font-bold`;
  closeBtn.innerHTML = "X";
  return closeBtn;
};
