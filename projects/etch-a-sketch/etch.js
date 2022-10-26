const container = document.querySelector('#container');

function createGrid(width) {
    let dimensions = Math.trunc((100/width));
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

createGrid(16);