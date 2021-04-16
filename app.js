const container = document.querySelector('.container');
const newGridBtn = document.querySelector('#submitBtn');
const resetBtn = document.querySelector('#reset');
const heightInput = document.querySelector('#height');
const widthInput = document.querySelector('#width');
const fancyColor = document.querySelector('#fancy-colors');
const blackColor = document.querySelector('#black-color');

const colors = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"]

function createGrid(x, y) {
    let totalSquares = x * y
    for (let i = 0; i < totalSquares; i++) {
        const gridDiv = document.createElement('div')
        trackColor(gridDiv);
        container.append(gridDiv);
    }
    container.style.gridTemplateColumns = `repeat(${x}, 1fr)`
}

newGridBtn.addEventListener('click', e => {
    const height = parseInt(heightInput.value)
    const width = parseInt(widthInput.value)
    console.log(height)
    console.log(width)
    if (height <= 100 && width <= 100) {
        const gridDivs = document.querySelectorAll('.container div')
        gridDivs.forEach(div => {
            div.remove();
        })
        createGrid(height, width)
    } else {
        heightInput.classList.add('below100');
    }
})

function trackColor(element) {
    element.addEventListener('mouseover', e => {
        if (fancyColor.checked === true) {
            e.target.style.backgroundColor = randomColor(colors);
        } else e.target.style.backgroundColor = 'black';
    })
}

resetBtn.addEventListener('click', e => {
    const gridDivs = document.querySelectorAll('.container div')
    gridDivs.forEach(div => {
        div.style.backgroundColor = 'white';
    })
})

function randomColor(arr) {
    let ranNum = Math.floor(Math.random() * (arr.length));
    return arr[ranNum];
}

createGrid(4, 4);
