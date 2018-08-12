const button = document.querySelector(".btn");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const title = document.querySelector(".title");
const container = document.querySelector(".container");

let color = {
  red: null,
  green: null,
  blue: null
};

ajaxRequest();

button.addEventListener("click", ajaxRequest);

function ajaxRequest() {
  let ajax = new XMLHttpRequest();
  ajax.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      let parsedArr = JSON.parse(this.responseText);
      let randomNum = Math.round(Math.random() * parsedArr.length - 1);
      quote.textContent = parsedArr[randomNum].text;
      author.textContent = parsedArr[randomNum].from;
      setColors();
    }
  };
  ajax.open("get", "quotes.json", true);
  ajax.send();
}

function generateRandomColor(colorObj) {
  colorObj.red = Math.round(Math.random() * 255);
  colorObj.green = Math.round(Math.random() * 255);
  colorObj.blue = Math.round(Math.random() * 255);
  return `rgb(${colorObj.red},${colorObj.green},${colorObj.blue})`;
}

function setColors() {
  let randColor = generateRandomColor(color);
  quote.style.color = randColor;
  author.style.color = randColor;
  title.style.color = randColor;
  button.style.backgroundColor = randColor;
  container.style.borderColor = randColor;
}
