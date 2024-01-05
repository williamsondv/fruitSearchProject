const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruits = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  let results = fruits.filter((fruit) => {
    if (fruit.toLowerCase().includes(str)) {
      return fruit;
    }
  });
  results = results.slice(0, 6);
  results = matchCharsBold(results);
  showSuggestions(results);
}

function searchHandler(e) {
  if (e.key === "Backspace") {
    if (input.value.length === 0) {
      suggestions.innerHTML = "";
      return;
    }
  }
  let str = input.value.toLowerCase();
  search(str);
}

function showSuggestions(results) {
  suggestions.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    if (results[i]) {
      suggestions.appendChild(
        document.createElement("li")
      ).innerHTML = `${results[i]}`;
    }
  }
}

function useSuggestion(e) {
  input.value = e.target.innerText;
  suggestions.innerHTML = "";
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);

function matchCharsBold(arr) {
  strArray = [...arr];
  const regEx = new RegExp(input.value, "i");

  return strArray.map((element) => {
    return element.replace(regEx, "<strong>$&</strong>");
  });
}
