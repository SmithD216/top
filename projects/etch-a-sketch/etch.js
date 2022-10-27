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

    for(let i = 0; i < width; i++) {
        let col = document.createElement('div');
        for(let j = 0; j < width; j++){
            let pixel = document.createElement('div');
            pixel.classList.add('pixel'); //
            col.appendChild(pixel);
        }
        col.classList.add('col');
        container.appendChild(col);
    }
}

const button = document.querySelector('#getWidth');
button.addEventListener('click', createGrid)
