function toggleNumber() {
  // get the clock
  var myClock = document.getElementById('number');

  // get the current value of the clock's display property
  var displaySetting = myNumber.style.display;

  // also get the clock button, so we can change what it says
  var numberButton = document.getElementById('numberButton');

  // now toggle the clock and the button text, depending on current state
  if (displaySetting == 'block') {
    // clock is visible. hide it
    myNumber.style.display = 'none';
    // change button text
    numberButton.innerHTML = 'Show Number';
  }
  else {
    // clock is hidden. show it
    myNumber.style.display = 'block';
    // change button text
    numberButton.innerHTML = 'Hide Number';
  }
}