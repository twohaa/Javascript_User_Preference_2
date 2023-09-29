const button = document.querySelector("button");
const body = document.querySelector("body");

const color = ['red','green','blue','yellow','pink','purple','black','crimson','orange'];
body.style.backgroundColor = 'violet';

function changeBG (e) {
    const colorIndex = parseInt(Math.random() * color.length);
    body.style.backgroundColor = color[colorIndex];

};
button.addEventListener("click", changeBG);