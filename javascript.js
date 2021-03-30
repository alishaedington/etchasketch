
const container = document.getElementById("container");
let cell = document.createElement("div");
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function removeGrid(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function colorChange() {
    const colorChange = container.querySelectorAll('div');
    colorChange.forEach(div => div.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = document.getElementById('colorpicker').value
    }));
}

var slider = document.getElementById("myRange");

document.getElementById('myRange').addEventListener('change', function () {
    let size = this.value;
    removeGrid(container);
    makeRows(size, size);
    colorChange();
});



makeRows(16, 16);
colorChange();