// Global scope variable
let globalCount = 0;

// Function with parameters and return value
function increaseCount(amount) {
  // Local scope variable
  let newCount = globalCount + amount;
  globalCount = newCount; // Update global variable
  return newCount;
}

// Example usage
console.log(increaseCount(5)); // 5
console.log(increaseCount(3)); // 8

const box = document.getElementById("animateBox");
const startBtn = document.getElementById("startBtn");

// Function to trigger animation
function triggerAnimation(element, animationName) {
  element.style.animation = `${animationName} 1s ease`;
  element.addEventListener("animationend", () => {
    element.style.animation = ""; // Reset animation so it can trigger again
  });
}

// Button click triggers bounce animation
startBtn.addEventListener("click", () => {
  triggerAnimation(box, "bounce");
});
