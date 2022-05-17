const arrayABC = ["К", "И", "З", "Ж", "Е", "Д", "Г", "В", "Б", "А"];
const ships = [
    {coordinates: [],  
    coordinatesAround: [],
    number: 1,
    decks: 0} ];

const firstTable = document.querySelector(".first-table");
const firstScreen = document.querySelector(".first-screen");

// Отрисовка таблицы для игры
firstScreen.insertAdjacentElement("beforeend", firstTable);
for (let i = 0; i < 11; i++) {
  const tr = document.createElement("tr");
  for (let k = 0; k < 11; k++) {
    const td = document.createElement("td");
    if (i === 10 && k > 0) {
      td.textContent = k;
    }
    if (i < 10 && k === 0) {
      td.textContent = arrayABC[i];
    }
    tr.appendChild(td);
  }
  firstTable.insertAdjacentElement("afterbegin", tr);
}
let countShips = 0;
// Событие на нажатие ячейки таблицы
firstTable.addEventListener("click", (e) => {
  let cell = e.target;
  if (cell.tagName.toLowerCase() != "td") return;
  let i = cell.parentNode.rowIndex - 1;
  let k = cell.cellIndex - 1;
  ships[countShips].coordinates.push([i, k]);
  if (ships[countShips].coordinates.length === 4) {
    countShips++;
    ships.push({ coordinates: [], coordinatesAround: [], decks: 0 });
  }
  console.log(ships);
});
