const rows = 5;
const cols = 6;
const totalVectors = rows * cols;

const container = document.querySelector('.vector-container');

for (let i = 0; i < totalVectors; i++) {
    const vector = document.createElement('img');
    vector.src = "heart.svg";
    vector.classList.add('vector-svg');
    container.appendChild(vector);
}
