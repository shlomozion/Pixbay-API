import { PixbayAPI } from "./actions/PixbayAPI.js";
import { Form } from "./form/form.js";
import { MoreBtn } from "./moreBtn/MoreBtn.js";

await PixbayAPI();

const topBarElement = document.getElementById("topbar");

const formObj = Form();
const { form, input } = formObj;

const formElement = document.getElementById("form");
formElement.appendChild(form);

const resultsElement = document.getElementById("results");
resultsElement.after(MoreBtn(input));

const footerElement = document.getElementById("footer");
footerElement.className = "border border-green-500 fixed bottom-0 w-full h-11";
footerElement.innerHTML = "footer";
