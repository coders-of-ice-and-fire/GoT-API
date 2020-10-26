import "./app.css";
import Header from "./components/Header";
import { createElement } from "./utils/elements";
import createHouseCard from "./components/House";
import { getAllHouses } from "./utils/api";
import Search from "./components/Search";
import Button from "./components/Button";

function App() {
  let nextPage = null;
  let lastHouse = null;
  const header = Header();

  const Houses = createElement("div");
  const loadMoreButton = Button({
    className: "loadMore",
    innerText: "More Houses are coming",
    onclick: () => {
      getHouses(lastHouse, nextPage);
    },
  });

  const main = createElement("main", {
    className: "main",
    children: [Houses, loadMoreButton],
  });

  async function getHouses(name, page) {
    const allHouses = await getAllHouses(name, page);
    const newHouses = allHouses.map((house) =>
      createHouseCard({
        name: house.name,
        quote: house.words,
        region: house.region,
      })
    );
    Houses.append(...newHouses);
    nextPage = page + 1;

    lastHouse = name;
  }
  const search = Search({
    onchange: (value) => {
      Houses.innerHTML = "";
      getHouses(value, 1);
    },
  });
  getHouses(null, 1);

  const container = createElement("div", {
    children: [header, search, main],
  });

  return container;
}

export default App;
