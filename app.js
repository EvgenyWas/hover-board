const board = document.querySelector('#board');
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const SQUARES_NUMBER = 600;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.className = 'square';

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));

    board.append(square);
};

function setColor(square) {
    let randomColor = getRandomColor();

    square.style.backgroundColor = randomColor;
    square.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`;
};

function removeColor(square) {
    square.style.backgroundColor = '#1d1d1d';
    square.style.boxShadow = `0 0 2px #000`;
};

function getRandomColor() {
    let hexColor = '#';
    const randomIndex = () => Math.floor(Math.random() * hex.length);

    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomIndex()];
    };
    return hexColor;
};