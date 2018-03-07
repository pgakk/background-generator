const css_gradient = document.querySelector("h3");
const [color1, color2] = document.querySelectorAll(".color");
const body = document.querySelector("#gradient");
const button = document.querySelector("button");

function setBackground() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css_gradient.textContent = body.style.background;
}

function setBackgroundGradient(color1, color2) {
    body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    css_gradient.textContent = body.style.background;
}

function randomColorGenerator() {
    let color1 = generateRandomColors();
    let color2 = generateRandomColors();

    setBackgroundGradient(color1, color2);
}

// function generateRandom() {
//     return Math.floor(Math.random() * 256);
// }

function generateRandomColors() {
    let rgb = [];
    for(let i = 0; i < 3; i++){
        rgb[i] = Math.floor(Math.random() * 256);
    }
    // return "rgb(" + generateRandom() + ", " + generateRandom() + ", " + generateRandom()+ ")";
    return "rgb(" + rgb[0] +  ", " + rgb[1] + ", " + rgb[2]+ ")";
}

window.addEventListener("load", setBackground);
color1.addEventListener("input", setBackground);
color2.addEventListener("input", setBackground);
button.addEventListener("click", randomColorGenerator);