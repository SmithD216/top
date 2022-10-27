const container = document.querySelector('#container');

function createGrid() {
    let width = prompt("Please enter the width of the grid", 16)
    if(width > 100){
        alert("Please enter a value less than 100")
        return
    } else if(width < 0){
        alert("Please enter a value greater than 0")
    }
    container.innerHTML = "";
    let dimensions = (100/width);
    for(let i = 0; i < (width ** 2); i++) {
        const pixel = document.createElement('div');
        pixel.setAttribute('style', "flex-basis:" + dimensions + "%; height:" + dimensions + "%;");
        pixel.classList.add('pixel');
        pixel.addEventListener('mouseover', ()=> {
            pixel.classList.add('active');
        });
        container.appendChild(pixel);
    }
}

const button = document.querySelector('#getWidth');
button.addEventListener('click', createGrid)
