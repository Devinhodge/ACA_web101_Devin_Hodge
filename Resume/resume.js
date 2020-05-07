function toggleNumber() {
  var myClock = document.getElementById('number');
  var displaySetting = myNumber.style.display;
  var numberButton = document.getElementById('numberButton');
  if (displaySetting == 'block') {
    myNumber.style.display = 'none';
    numberButton.innerHTML = 'Show Number';
  }
  else {
    myNumber.style.display = 'block';
    numberButton.innerHTML = 'Hide Number';
  }
}