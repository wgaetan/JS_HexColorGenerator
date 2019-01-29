/**
 * Generate a hex string representing a color
 * @return {string} an hexadecimal color code
 */
function randomColor() {
  return ('#' + Math.random().toString(16).slice(2, 8));
}

/**
 * Set background color of index.html using string generated in randomColor()
 */
function setBackgroundColor() {
  document.body.style.background = randomColor();
}

setBackgroundColor();

/**
 * Call setBackgroundColor() function each time the SpaceBar is pressed
 */
document.addEventListener('keydown', (e) => {
  if (e.key === ' ') {
    setBackgroundColor();
  }
});
