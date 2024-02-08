document.addEventListener("DOMContentLoaded", function () {
  // Get the text element
  var typedTextElement = document.getElementById("typed-text");

  // Get the text content
  var textContent = typedTextElement.textContent.trim();

  // Clear the text content
  typedTextElement.textContent = "";

  // Set the animation duration based on the text length
  var animationDuration = textContent.length * 0.1 + "s";

  // Apply the animation style
  typedTextElement.style.animation =
    "typing " + animationDuration + " steps(28) forwards";

  // Make the text visible
  typedTextElement.style.opacity = 1;
});
