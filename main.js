// Required variables
let minutesDiv = document.getElementById("minutes");
let secondsDiv = document.getElementById("seconds");
let timerNameDiv = document.getElementById("timerName");
let startStopButton = document.getElementById("startStopButton");
let count = 0;

//Starting template for the timer
function template() {
  minutesDiv.textContent = 25;
  secondsDiv.textContent = "0";
  timerNameDiv.textContent = "Work";
  startStopButton.textContent = "Start";
}

//Start the timer when click to the button
startStopButton.addEventListener("click", start);
function start() {
  // Change the minutes and seconds to starting time
  sessionMinutes = 24;
  sessionSeconds = 59;

  // Add the seconds, minutes, the timer name and the button Name to the page
  minutesDiv.textContent = sessionMinutes;
  secondsDiv.textContent = sessionSeconds;
  timerNameDiv.textContent = "Work";
  startStopButton.textContent = "Stop";

  // Start the countdown
  let minutesInterval = setInterval(minutesTimer, 60000);
  let secondsInterval = setInterval(secondsTimer, 1000);

  // Functions
  // Function for minute counter
  function minutesTimer() {
    sessionMinutes--;
    minutesDiv.textContent = sessionMinutes;
  }

  // Function for second counter
  function secondsTimer() {
    sessionSeconds--;
    secondsDiv.textContent = sessionSeconds;

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
      //To calculate the rounds
      count++;
      //if he complete 4 rounds and start the last round take a long break else take a short break
      if (count == 5) {
        takeLongeBreak();
        count = 0;
      } else takeBreak();
    }
  }
}

function takeBreak() {
  // Change the minutes and seconds to starting time
  let resTMinutes = 5;
  let resTSeconds = 0;
  // Add the seconds, minutes, the timer name and the button Name to the page
  secondsDiv.textContent = resTSeconds;
  minutesDiv.textContent = resTMinutes;
  timerNameDiv.textContent = "Rest";
  startStopButton.textContent = "Stop";

  // Start the countdown
  let minutesInterval = setInterval(minutesTimer, 60000);
  let secondsInterval = setInterval(secondsTimer, 1000);
  // Functions
  // Function for minute counter
  function minutesTimer() {
    resTMinutes--;
    minutesDiv.textContent = resTMinutes;
  }

  // Function for second counter
  function secondsTimer() {
    resTSeconds--;
    secondsDiv.textContent = resTSeconds;

    // Check if the seconds and minutes counter has reached 0
    // If reached 0 then end the session (round)
    if (resTSeconds <= 0) {
      if (resTMinutes <= 0) {
        // Clears the interval to stops the counter
        clearInterval(minutesInterval);
        clearInterval(secondsInterval);
      }
      //When the long rest ended go back to start round
      start();
      // Reset the seconds to 60
      resTSeconds = 60;
    }
  }
}

function takeLongeBreak() {
  // Change the minutes and seconds to starting time
  let longResTMinutes = 15;
  let longRSeconds = 0;
  // Add the seconds, minutes, the timer name and the button Name to the page
  secondsDiv.textContent = longRSeconds;
  minutesDiv.textContent = longResTMinutes;
  timerNameDiv.textContent = "Long Rest";
  startStopButton.textContent = "Stop";

  // Start the countdown
  let minutesInterval = setInterval(minutesTimer, 60000);
  let secondsInterval = setInterval(secondsTimer, 1000);
  // Functions
  // Function for minute counter
  function minutesTimer() {
    longResTMinutes--;
    minutesDiv.textContent = longResTMinutes;
  }

  // Function for second counter
  function secondsTimer() {
    longRSeconds--;
    secondsDiv.textContent = longRSeconds;

    // Check if the seconds and minutes counter has reached 0
    // If reached 0 then end the session (round)
    if (longRSeconds <= 0) {
      if (longResTMinutes <= 0) {
        // Clears the interval to stops the counter
        clearInterval(minutesInterval);
        clearInterval(secondsInterval);
      }
      //When the long rest ended user interface will reset back to the initial state with the timer name set to "Finished"
      minutesDiv.textContent = 25;
      secondsDiv.textContent = "0";
      timerNameDiv.textContent = "Finished";
      startStopButton.textContent = "Start";
      // Reset the seconds to 60
      longRSeconds = 60;
    }
  }
}
