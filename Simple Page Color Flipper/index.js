
const body = document.getElementsByTagName("body")[0]

function setColor(name) {
    body.style.backgroundColor = name;
}

function RandomColor() {
    const R = Math.round(Math.random() * 255);
    const G = Math.round(Math.random() * 255);
    const B = Math.round(Math.random() * 255);

    const rndColor = `rgb(${R}, ${G}, ${B})`;
    body.style.backgroundColor = rndColor;
}

