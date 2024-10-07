// Get the body element
const body = document.body;

// Function to change background color on scroll
function changeBackgroundColor() {
  // Get the scroll position
  const scrollPosition = window.scrollY;

  // Define colors based on scroll position
  const color1 = 'rgba(255, 192, 203, 1)'; // Color 1 (redish)
  const color2 = 'rgba(254, 180, 123, 1)'; // Color 2 (yellowish)
  const color3 = 'rgba(134, 227, 206, 1)'; // Color 3 (greenish)
  const color4 = 'rgba(249, 215, 110, 1)'; // Color 4 (light yellow)

  // Calculate a color based on scroll position
  let newColor;
  if (scrollPosition < 500) {
    newColor = color1;
  } else if (scrollPosition < 1000) {
    newColor = color2;
  } else if (scrollPosition < 1500) {
    newColor = color3;
  } else {
    newColor = color4;
  }

  // Change the background color
  body.style.backgroundColor = newColor;
}

// Event listener for scroll events
window.addEventListener('scroll', changeBackgroundColor);