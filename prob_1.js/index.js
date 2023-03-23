// Get DOM elements
const hourHand = document.querySelector("#hour");
const minuteHand = document.querySelector("#minute");
const secondHand = document.querySelector("#second");

// Function to rotate hands
const rotateHands = () => {
  // Get current time
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  //   Calculate degrees of rotation per each hand of the clock
  const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30;
  const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
  const secondDegrees = (seconds / 60) * 360;

  //   Rotate the hands
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
};

// Call the rptateHands function every second
setInterval(rotateHands, 1000);
