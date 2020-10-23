import "./house.css";
import { createElement } from "../utils/elements";

function createHouseCard() {
  const houseTitle = createElement("h3", {
    className: "house__title",
    innerText: "HOUSE: blabla",
  });

  const houseQuote = createElement("blockquote", {
    className: "house__quote",
    innerText: "a quote here",
  });

  const houseInfo = createElement("div", {
    className: "house__info",
    children: [
      createElement("p", {
        innerText: "Region: anywehere",
      }),
    ],
  });
  const houseContainer = createElement("div", {
    //evtl article einsetzen
    className: "house__container",
    children: [houseTitle, houseQuote, houseInfo],
  });

  return houseContainer;
}

export default createHouseCard;
