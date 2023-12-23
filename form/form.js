import { PixbayAPI } from "../actions/PixbayAPI.js";

export const Form = () => {
  const form = document.createElement("form");
  form.className = `border flex justify-center items-center gap-4 h-16 rounded shadow-xl`;

  const input = document.createElement("input");
  input.className = `border border-slate-300 py-1 px-2 outline-none rounded-xl shadow-lg focus:border-slate-500`;
  input.size = "30";
  input.type = "search";

  const button = document.createElement("button");
  button.className = `bg-slate-700 text-slate-200 p-2 rounded-lg hover:text-slate-700 hover:bg-slate-300 font-bold`;
  button.innerText = "Search";
  button.type = "submit";

  button.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
      await PixbayAPI(input.value, "");
    } catch (error) {
      console.log(error);
    }
  });
  form.appendChild(input);
  form.appendChild(button);

  return { form, input };
};
