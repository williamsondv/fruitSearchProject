const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

//array of items to be searched
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

//filter fruits array, retain the first six items, bold matching characters and show suggestions
function search(str) {
  if (input.value.length > 0) {
    let results = fruits.filter((fruit) => {
      if (fruit.toLowerCase().includes(str)) {
        return fruit;
      }
    });
    results = results.slice(0, 6);
    results = matchCharsBold(results);
    showSuggestions(results);
  }
}

//empty search list if user backspaces to empty the input text, pass input to search function
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

//create list elements from filtered results array
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

//set input text to clicked suggestion
function useSuggestion(e) {
  if (e.target.tagName === "LI") {
    const str = e.target.innerText;
    input.value = str;
  } else if (e.target.tagName === "B") {
    input.value = e.target.parentElement.innerText;
  }
  suggestions.innerHTML = "";
}

//set characters matching search input to bold
function matchCharsBold(arr) {
  strArray = [...arr];
  const regEx = new RegExp(input.value, "i");

  return strArray.map((element) => {
    return element.replace(regEx, "<b>$&</b>");
  });
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
