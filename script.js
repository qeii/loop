const rows = 5;
const cols = 6;
const totalVectors = rows * cols;
const container = document.querySelector('.vector-container');

for (let i = 0; i < totalVectors; i++) {
    const img = document.createElement('img');
    img.src = 'heart.svg';
    img.classList.add('vector-svg');
    img.alt = 'Heart icon';  // Accessibility improvement
    container.appendChild(img);
}
