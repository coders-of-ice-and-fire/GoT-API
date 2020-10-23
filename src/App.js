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

  const main = createElement("main", {
    children: [Houses],
  });
  const loadMoreButton = Button({
    innerText: "More Houses are coming",
    onclick: () => {
      getHouses(lastHouse, nextPage);
    },
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
    nextPage = allHouses.next?.match(/\d+/)[0];
    loadMoreButton.disabled = !allHouses.next;
    lastHouse = name;
  }
  const search = Search({
    onchange: (value) => {
      Houses.innerHTML = "";
      getHouses(value);
    },
  });
  getHouses();

  const container = createElement("div", {
    children: [header, search, main, loadMoreButton],
  });

  return container;
}

export default App;
