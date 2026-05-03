function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorText = document.querySelector('.color');
const bodyEl = document.body;

changeColorBtn.addEventListener('click', () => {
  const randomColor = getRandomHexColor();

  bodyEl.style.backgroundColor = randomColor;
  colorText.textContent = randomColor;
});
