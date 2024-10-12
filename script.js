const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "I like you too!!)";
  gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDM2ajlvd21obXZwdjhjd2V3cHpiZXhjZ29hMTFtMWNnd2o2bThteiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3orifdgKg83Q7FGkV2/giphy.gif";  // New GIF link
});

// Function to move the No button randomly
const moveNoButton = () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  // Ensure random positions are within bounds
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.min(Math.floor(Math.random() * maxY), wrapperRect.height - noBtnRect.height); // Prevent moving too far down

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
};

// Make the No button move on hover or touchstart
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();  // Prevent the touch event from triggering a click
  moveNoButton();
});