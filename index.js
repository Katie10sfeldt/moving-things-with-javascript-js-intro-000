const app = "I don't do much."

document.addEventListener('keydown', (e) => {
  if (e.which === 37) {
    var leftNumbers = dodger.style.left.replace('px', '')
    var left = paresInt(leftNumbers, 10);

    dodger.style.left = `${left - 1}px`;
  }
})
