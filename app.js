const button = document.querySelector(".btn");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const title = document.querySelector(".title");
const container = document.querySelector(".container");

const color = {
  red: null,
  green: null,
  blue: null
};

ajaxRequest();

button.addEventListener("click", ajaxRequest);

//Version 1 using XMLHTttpRequest:

function ajaxRequest() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "quotes.json", true);
  // Can also use onreadyStateChange, but would need to include this.readyState === 4 in if statement
  xhr.onload = function() {
    if (this.status === 200) {
      const parsedArr = JSON.parse(this.responseText);
      const randomNum = Math.round(Math.random() * parsedArr.length - 1);
      quote.textContent = parsedArr[randomNum].text;
      author.textContent = parsedArr[randomNum].from;
      setColors();
    }
  };
  xhr.onerror = function(err) {
    console.error(err);
  };
  xhr.send();
}

function generateRandomColor(colorObj) {
  colorObj.red = Math.round(Math.random() * 255);
  colorObj.green = Math.round(Math.random() * 255);
  colorObj.blue = Math.round(Math.random() * 255);
  return `rgb(${colorObj.red},${colorObj.green},${colorObj.blue})`;
}

function setColors() {
  const randColor = generateRandomColor(color);
  quote.style.color = randColor;
  author.style.color = randColor;
  title.style.color = randColor;
  button.style.backgroundColor = randColor;
  container.style.borderColor = randColor;
}

// Version 2 using Fetch API:

// function ajaxRequest() {
//   fetch("quotes.json")
//     .then(req => req.json())
//     .then(res => {
//       const randomNum = Math.round(Math.random() * res.length - 1);
//       quote.textContent = res[randomNum].text;
//       author.textContent = res[randomNum].from;
//       setColors();
//       // Need to return response in case it has an error
//       return res;
//     })
//     .catch(err => console.error(err));
// }

// Version 3 using Async Await:

// async function ajaxRequest() {
//   const req = await fetch("quotes.json");
//   const res = await req.json();
//   const randomNum = Math.round(Math.random() * res.length - 1);
//   quote.textContent = res[randomNum].text;
//   author.textContent = res[randomNum].from;
//   setColors();
// }
