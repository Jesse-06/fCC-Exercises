var d = document;

// On page load, make sure the calculator is off and set up mobile
$(document).ready(function() {
  //load page with calculator turned off
  turnCalcOff();

  // Get CSS Media Rule event to determine if running on mobile-sized screen.
  // If so, give a Telephone number pad for data entry and set up fastclick.js click to tap conversions.
  var match = window.matchMedia("screen and (min-width:480px)");
  if (match.matches === false) {
    d.getElementById("input-window").type = "tel";
    //minimize standard 300ms tap to click conversion time on mobile
    if ('addEventListener' in document) {
      d.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(d.body);
      }, false);
    }
  } else {
    d.getElementById("input-window").type = "text";
  }
});

// Manage state when clicking on the round buttons: 
// Turn calc on if needed, don't allow repeat presses of function buttons, and 
// clear the display if the equals button was pressed prior to clicking on a round button.
function prerequisites() {
  fBtnPressed = false;
  if (power === false) turnCalcOn();
  if (clear === true) {
    clear = false;
    clearEntry();
    d.getElementById("clear").innerHTML = "C"
  }
}

//Number Buttons. Each <button> has an ID equal to the number it represents. Append the ID to the input window.
$(".number").click(function() {
  prerequisites();
  d.getElementById("input-window").value = d.getElementById("input-window").value + this.id;
});

//Enter the decimal point and allow only one entry
function decimal() {
  prerequisites();
  //if a decimal is entered first, prepend a zero.
  var val = d.getElementById("input-window").value;
  if (!val) d.getElementById("input-window").value = "0";

  //only allow one decimal
  if (val.indexOf(".") < 0) {
    d.getElementById("input-window").value = d.getElementById("input-window").value + ".";
  }
}

// Multiply, divide, add, or subtract and update formula string in the hidden #formula div.
function operate(operator) {

  //if nothing in the input window, nothing to calculate. Return.
  if (d.getElementById("input-window").value === "") return;

  //If the user just pressed an operator button, replace the operator in the formula string
  //Otherwise, update the input window with current result and add the operator to the formula string
  if (fBtnPressed === true) {
    var formula = d.getElementById("formula").innerHTML;
    var formula = formula.replace(/(\+|\-|\*|\/)$/, operator);
    d.getElementById("formula").innerHTML = formula;
  } else {
    fBtnPressed = true;
    clear = true;
    d.getElementById("formula").innerHTML = d.getElementById("formula").innerHTML + d.getElementById("input-window").value
    d.getElementById("input-window").value = eval(d.getElementById("formula").innerHTML)
    d.getElementById("formula").innerHTML = d.getElementById("formula").innerHTML + operator;
  }
}

//Percentage Calculation: A [+*/-] (A*B/100)
function percent() {
  //get the previously entered value
  var A = d.getElementById("formula").innerHTML.match(/((\d|\.)+)(?!.*\d)/)
  //divide the currently displayed value by 100
  var B = d.getElementById("input-window").value
  //Final result = (A*(B/100)) which will be added to the running formula after pressing equals or another operator button
  d.getElementById("input-window").value = eval(A[0] * (B / 100))
}

// Make negative or positive when the +/- button is pressed by multiplying by -1
function plusmin() {
  prerequisites();
  d.getElementById("input-window").value = eval(d.getElementById("input-window").value + "*-1");
}

// Final answer - run eval() against the hidden formula div and use e notation if longer than 10 characters.
function equals() {
  fBtnPressed = false;
  if (d.getElementById("input-window").value === "") return;
  
  d.getElementById("formula").innerHTML = d.getElementById("formula").innerHTML + d.getElementById("input-window").value
  var result = eval(d.getElementById("formula").innerHTML);

  // Split final answer into two strings separated by the decimal point if it exists  
  if (result.toString().indexOf(".") >= 0) {
    var splitResult = result.toString().split(".");

    // If > 10 numbers before decimal, make it exponential
    if (splitResult[0].length > 10) {
      result = result.toExponential(2);
      updateInput(result);
      return result;
    }

    // If > 10 numbers after decimal, trim it to 10 - length of numbers before the decimal to achieve max length.
    if (splitResult[1].length > 10) {
      result = result.toFixed(10 - splitResult[0].length);
      result = Number(result.toString().replace(/0+$/, ""));
      updateInput(result);
      return result;
    }
  }
  
  //if no decimals and larger than 10 numbers, make it exponential
  if (result.toString().length > 10) {
    result = result.toExponential(2);
    updateInput(result);
    return result;
  }
  
  updateInput(result);
}

//insert results back into calculator input window
function updateInput(result) {
  clear = true;
  d.getElementById("input-window").value = result;
  d.getElementById("formula").innerHTML = "";
}

// Restrict text input to numbers and operators. Submit on enter.
function inputLimiter(e) {
  var AllowableCharacters = '1234567890*/-+.';
  var k = d.all ? parseInt(e.keyCode) : parseInt(e.which);
  
  if (k != 13 && k != 8 && k != 0) {
    if ((e.ctrlKey == false) && (e.altKey == false)) {
      return (AllowableCharacters.indexOf(String.fromCharCode(k)) != -1);
    }
  }
  
  if (e && e.keyCode == 13) equals();
}

// Power Button logic
function powerButton() {
  fBtnPressed = false;
  
  if (d.getElementById("power-btn").style.color === "black") {
    turnCalcOn();
  } else {
    turnCalcOff();
  }
}

function turnCalcOn() {
  clearAll();
  power = true
  d.getElementById("input-window").setAttribute("style", "background-color: aqua")
  d.getElementById("battery").setAttribute("style", "visibility: visible")
  d.getElementById("power-btn").setAttribute("style", "color: rgba(0,102,204,1)")
}

function turnCalcOff() {
  clearAll();
  power = false
  d.getElementById("input-window").setAttribute("style", "background-color: lightgray")
  d.getElementById("battery").setAttribute("style", "visibility: hidden;")
  d.getElementById("power-btn").setAttribute("style", "color: black")
}

//Clear / All Clear button logic
function clearButton() {
  fBtnPressed = false;
  
  if (d.getElementById("input-window").value !== "" && d.getElementById("clear").innerHTML === "C") {
    d.getElementById("clear").innerHTML = "AC"
    clearEntry();
  } else {
    clearAll();
  }
}

function clearEntry() {
  d.getElementById("input-window").value = "";
}

function clearAll() {
  d.getElementById("clear").innerHTML = "C"
  d.getElementById("input-window").value = "";
  d.getElementById("formula").innerHTML = "";
}