// Configuration
  const rows = 5;  // Number of rows
  const cols = 6;  // Number of columns
  const totalHearts = rows * cols; // Total number of hearts

  // Select the container
  const container = document.querySelector('.heart-pattern');

  // Generate hearts dynamically
  for (let i = 0; i < totalHearts; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    container.appendChild(heart);
  }
