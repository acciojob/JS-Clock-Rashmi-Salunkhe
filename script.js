//your code here
function setClock() {
  const now = new Date();

  // Get the current seconds, minutes, and hours
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Calculate the degrees for each hand
  const secondsDegrees = ((seconds / 60) * 360) + 90;  // Add 90 degrees to start at 12 o'clock
  const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

  // Select the clock hands
  const secondHand = document.querySelector('.second-hand');
  const minuteHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  // Apply the rotation styles
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Run the setClock function every second
setInterval(setClock, 1000);

// Initialize the clock on page load
setClock();
