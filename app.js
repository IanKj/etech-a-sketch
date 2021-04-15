const container = document.querySelector('.container');
const resetBtn = document.querySelector('#reset');

function createGrid(x, y) {
    //deleteAllChildren(container);
    let totalSquares = x * y
    for (let i = 0; i < totalSquares; i++) {
        const gridDiv = document.createElement('div')
        trackColor(gridDiv);
        container.append(gridDiv);
    }
    container.style.gridTemplateColumns = `repeat(${x}, 1fr)`
    // container.style.gridTemplateRows = `repeat(${y}, ${divSize})`
    // container.style.width = gridWidth;

}

resetBtn.addEventListener('click', r => {
    const gridDivs = document.querySelectorAll('.container div')
    gridDivs.forEach(div => {
        div.remove();
    })
    let height = prompt('height of new grid')
    let width = prompt('width of new grid')

    createGrid(height, width)
})

function trackColor(element) {
    element.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = 'pink';
    })
}

createGrid(4, 4);



// function createGrid(x, y, size) {
//     let totalSquares = x * y;
//     let divSize = size + 'px'
//     let gridWidth = (size * x + 1) + 'px';
//     for (let i = 0; i < totalSquares; i++) {
//         const gridDiv = document.createElement('div')
//         trackColor(gridDiv);
//         container.append(gridDiv);
//     }
//     container.style.gridTemplateColumns = `repeat(${x}, ${divSize})`
//     container.style.gridTemplateRows = `repeat(${y}, ${divSize})`
//     container.style.width = gridWidth;

// }