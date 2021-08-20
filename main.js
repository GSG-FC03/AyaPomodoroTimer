// Required variables
let sessionMinutes = 25;
let sessionSeconds = "00";
let timerName = "Work";
let startStopButtonName="Start";

//Starting template for the timer
function template() {
  document.getElementById("minutes").textContent = sessionMinutes;
  document.getElementById("seconds").textContent = sessionSeconds;
  document.getElementById("timerName").textContent = timerName;
  document.getElementById("startStopButton").textContent = startStopButtonName;
}

function startTimer() {
  // Change the minutes and seconds to starting time
  sessionMinutes = 24;
  sessionSeconds = 59;

  // Add the seconds, minutes, the timer name and the button Name to the page
  document.getElementById("minutes").textContent = sessionMinutes;
  document.getElementById("seconds").textContent = sessionSeconds;
  document.getElementById("timerName").textContent = timerName;
  document.getElementById("startStopButton").textContent = "Stop";

  // Start the countdown
  let minutesInterval = setInterval(minutesTimer, 60000);
  let secondsInterval = setInterval(secondsTimer, 1000);

  // Functions
  // Function for minute counter
  function minutesTimer() {
    sessionMinutes--;
    document.getElementById("minutes").textContent = sessionMinutes;
  }

  // Function for second counter
  function secondsTimer() {
    sessionSeconds--;
    document.getElementById("seconds").textContent = sessionSeconds;

    // Check if the seconds and minutes counter has reached 0
    // If reached 0 then end the session (round)
    if (sessionSeconds <= 0) {
      if (sessionMinutes <= 0) {
        // Clears the interval to stops the counter
        clearInterval(minutesInterval);
        clearInterval(secondsInterval);
      }
      // Reset the seconds to 60
      sessionSeconds = 60;
    }
  }
}
