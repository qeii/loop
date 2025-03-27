const rows = 5;
const cols = 6;
const totalBurgers = rows * cols;

const container = document.querySelector('.burger-container');

for (let i = 0; i < totalBurgers; i++) {
    const burger = document.createElement('img');
    burger.src = "white-burger.svg";
    burger.classList.add('burger-icon');
    container.appendChild(burger);
}
