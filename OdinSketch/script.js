// assignment of elements
//const slider = document.getElementById('gridSizeSlider');
const defaultSize = 16;
const defaultColour = 'black';
const defaultStyle = 'default';
const range = document.getElementById('gridSize');
const grid = document.getElementById('grid');
const btnClear = document.getElementById('btnClear');
const slider = document.getElementById('gridSizeSlider');
const btnSizeNew = document.getElementById('gridSizeSet');
const sliderValue = document.getElementById('sliderValue');
const btnErase = document.getElementById('btnErase');
const colourPicker = document.getElementById('colourPicker');

let size = defaultSize;
let clicked = false;
let style = defaultStyle;
let currentColour = defaultColour;
let erase = false;
let colored = false;
// assignment of actions
document.body.addEventListener('mousedown', () => (clicked = true));
document.body.addEventListener('mouseup', () => (clicked = false));

slider.onchange = () => (sliderValue.innerHTML = (slider.value + 'x' + slider.value));
slider.onmousemove = ()=>(sliderValue.innerHTML = (slider.value + 'x' + slider.value));
colourPicker.onchange = ()=>(currentColour=colourPicker.value);
window.onbeforeunload = ()=>{colourPicker.value=defaultColour; return undefined};


btnErase.onclick = () => {
    
    if(currentColour==='white'){
        currentColour=colourPicker.value;
        btnErase.style.background ='#9898d3';
    }
    else{
    (currentColour = 'white')
    erase = true;
    btnErase.style.background ='#7b7baa';
    }
}
//creating element with id and class and event listener
function createElement(type, className, id, where) {
    const newDiv = document.createElement(type)
    newDiv.setAttribute("class", className)
    newDiv.setAttribute("id", id)
    newDiv.addEventListener('mouseover', draw)
    newDiv.addEventListener('mousedown', draw)
    document.getElementById(where).appendChild(newDiv)
}


//creating grid
function createGrid(size) {
    document.getElementById('grid').style.gridTemplateRows = 'repeat(' + size + ',1fr)'
    document.getElementById('grid').style.gridTemplateColumns = 'repeat(' + size + ',1fr)'
    let sizeOfGrid = size * size;
    for (let i = 0; i < sizeOfGrid; i++) {
        createElement('div', 'Grid-elements', i, 'grid');
    }

}

function reload() {
    clear()
    createGrid(size)
}

function clear() {
    grid.innerHTML = ''
    createGrid()
    sliderValue.innerHTML = (size + 'x' + size);
    slider.value = size;
    currentColour=defaultColour;
    colourPicker.value=defaultColour;
}

//updating grid
btnSizeNew.onclick = () => {
    (size = slider.value)
    reload();
    console.log(size)
}
btnClear.onclick = () => {
    (size = defaultSize)
    reload()
}

//function or drawing
function draw(box) {
    if (box.type === 'mouseover' && !clicked) 
    return
    else {
        box.target.style.backgroundColor = currentColour;
    }
}


createGrid(size)


