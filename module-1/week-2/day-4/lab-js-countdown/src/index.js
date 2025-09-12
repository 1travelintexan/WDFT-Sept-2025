const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let intervalId = null; // Variable to store the interval
let timeoutId = null;
const startBtnElement = document.querySelector("#start-btn");
const timeElement = document.querySelector("#time");
const toastCardElement = document.querySelector("#toast");
const closeToastBtnElement = document.querySelector("#close-toast");
const toastMessageElement = document.querySelector("#toast-message");
// ITERATION 1: Add event listener to the start button
startBtnElement.addEventListener("click", () => {
  startCountdown();
  startBtnElement.disabled = true;
});
closeToastBtnElement.addEventListener("click", () => {
  clearTimeout(timeoutId);
  toastCardElement.classList.remove("show");
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  const intervalId = setInterval(() => {
    remainingTime--;
    timeElement.innerText = remainingTime;
    if (remainingTime === 9) {
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    } else if (remainingTime <= 0) {
      clearInterval(intervalId);
      showToast("Lift off! 🚀");
      remainingTime = 10;
      setTimeout(() => {
        timeElement.innerText = remainingTime;
        startBtnElement.disabled = false;
      }, 2000);
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toastCardElement.classList.add("show");
  timeoutId = setTimeout(() => {
    toastCardElement.classList.remove("show");
  }, 3000);

  toastMessageElement.innerText = message;
}
