const button = document.querySelector('.btn');
const quote = document.querySelector('.quote')
const author = document.querySelector('.author');
const body = document.querySelector('body');

let color = {
    red: null,
    green: null,
    blue: null,
    opacity: null
}


body.style.backgroundColor = generateRandomColor(color);

button.addEventListener('click', function () {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let parsedArr = JSON.parse(this.responseText);
            let randomNum = Math.round(Math.random() * parsedArr.length - 1);
            // let quote = parsedArr[randomNum];
            // document.querySelector('p').textContent = JSON.stringify(quote);
            console.log(parsedArr[randomNum])
            quote.textContent = parsedArr[randomNum].quote;
            author.textContent = parsedArr[randomNum].name;
            body.style.backgroundColor = generateRandomColor(color);
        }
    }
    ajax.open('get', 'quotes.json', true);
    ajax.send();
});

function generateRandomColor(colorObj) {
    colorObj.red = Math.round(Math.random() * 255);
    colorObj.green = Math.round(Math.random() * 255);
    colorObj.blue = Math.round(Math.random() * 255);
    colorObj.opacity = Math.round(Math.random() * 10) * .1;
    return `rgba(${colorObj.red},${colorObj.green},${colorObj.blue},${colorObj.opacity})`;
}