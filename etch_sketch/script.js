
const container = document.getElementById("flex-container");

let isMouseDown = false;

document.addEventListener('mousedown', () => isMouseDown = true);
document.addEventListener('mouseup', () => isMouseDown = false);

for (i = 0; i < 256; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.addEventListener('mouseover', () => {
        if (isMouseDown) grid.classList.add('colored');
    });
    container.appendChild(grid);
}

