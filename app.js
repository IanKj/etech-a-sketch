const container = document.querySelector('.gridContainer');
const newGridBtn = document.querySelector('#submitBtn');
const resetBtn = document.querySelector('#reset');
const heightInput = document.querySelector('#height');
const widthInput = document.querySelector('#width');
const fancyColor = document.querySelector('#fancy-colors');
const selectColor = document.querySelector('#color-options');

// const colors = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"]
const colors = [
    { name: "Charcoal", hex: "#264653" },
    { name: "Persian Green", hex: "#2a9d8f" },
    { name: "Orange Yellow Crayola", hex: "#e9c46a" },
    { name: "Sandy Brown", hex: "#f4a261" },
    { name: "Burnt Sienna", hex: "#e76f51" }
]
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
        const gridDivs = document.querySelectorAll('.gridContainer div')
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
        } else {
            e.target.style.backgroundColor = selectColor.value;
        }
    })
}

resetBtn.addEventListener('click', e => {
    const gridDivs = document.querySelectorAll('.gridContainer div')
    gridDivs.forEach(div => {
        div.style.backgroundColor = '#b7b7a4';
    })
})

function randomColor(arr) {
    let array = [];
    arr.forEach(color => {
        array.push(color.hex)
    })
    let ranNum = Math.floor(Math.random() * (arr.length));
    return array[ranNum];
}

function addColorOptions(array) {
    array.forEach(color => {
        const colorEl = document.createElement('option');
        colorEl.value = color.hex;
        colorEl.innerText = color.name;
        colorEl.style.backgroundColor = color.hex;
        selectColor.append(colorEl);
    })
    selectColor.style.backgroundColor = colors[0].hex;
}

selectColor.addEventListener('change', e => {
    console.log(e.target.value)
    selectColor.style.backgroundColor = e.target.value;
    selectColor.previousElementSibling.checked = true
})

addColorOptions(colors);

createGrid(4, 4);
