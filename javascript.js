
const container = document.getElementById("container");
let cell = document.createElement("div");
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    const colorChange = container.querySelectorAll('div');
    colorChange.forEach(div => div.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = color;
    }));
}


function newColorEverySquare() {
    const colorChange = container.querySelectorAll('div');
    colorChange.forEach(div => div.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = getRandomColor();
    }));
}

function colorChange() {
    const colorChange = container.querySelectorAll('div');
    colorChange.forEach(div => div.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = document.getElementById('colorpicker').value
    }));
}

function removeGrid(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

let slider = document.getElementById("myRange");

document.getElementById('myRange').addEventListener('change', function () {
    let size = this.value;
    removeGrid(container);
    makeRows(size, size);
    colorChange();
});

document.getElementById('myRange').addEventListener('click', function () {
    let size = this.value;
    removeGrid(container);
    makeRows(size, size);
    colorChange();
});

document.getElementById('random').addEventListener('click', function () {
    randomColor();
});

document.getElementById('colorpicker').addEventListener('change', function () {
    colorChange();
});

document.getElementById('colorpicker').addEventListener('click', function () {
    colorChange();
});

document.getElementById('mixer').addEventListener('click', function () {
    newColorEverySquare();
})


makeRows(16, 16);
colorChange();