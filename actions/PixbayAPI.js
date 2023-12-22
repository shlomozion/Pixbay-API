import { card } from "../card/card.js";
import { Loader } from "../loader/Loader.js";

export const PixbayAPI = async (input, pageNum) => {
  const loader = Loader();
  try {
    // const res =
    //   await fetch(`https://pixabay.com/api/?key=41151122-f8eb0ebcdf4975643bb0bf190&q=${
    //     input ? encodeURIComponent(input) : ""
    //   }&page=${pageNum}&orientation=vertical&per_page=20
    // `);
    const resultsElement = document.getElementById("results");
    resultsElement.innerHTML = "";
    resultsElement.className = "flex justify-center";
    resultsElement.appendChild(loader);

    const res = await fetch(`http://localhost:3000/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input, pageNum }),
    });

    const data = await res.json();
    if (data) {
      resultsElement.removeChild(loader);

      resultsElement.className = `p-4 border border-slate-200 h-[68vh] overflow-y-scroll grid max-sm:grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3`;
      data.hits.map((item) => resultsElement.appendChild(card(item)));
      resultsElement.scrollTo({
        top: 100,
        left: 100,
        behavior: "instant",
      });
      return resultsElement;
    }
  } catch (error) {
    console.log(error);
  }
};
