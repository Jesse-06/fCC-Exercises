var d = document; //shorthand
var drainage; //battery drain timer

$(document).ready(function() {
  turnCalcOff();
  mobileSetup();
});

function mobileSetup() {
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
}

//Power Button logic
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

  //Drain the battery by 25% every 8 seconds.
  var count = 5;
  drainage = setInterval(function() {
    count--
    d.getElementById("battery").setAttribute("class", "fa fa-battery-" + count + " fa-stack-1x")
    if (count === 0) {
      count = 5
    }
  }, 8000);
}

function turnCalcOff() {
  clearInterval(drainage);
  clearAll();
  power = false
  d.getElementById("input-window").setAttribute("style", "background-color: lightgray")
  d.getElementById("battery").setAttribute("style", "visibility: hidden;")
  d.getElementById("power-btn").setAttribute("style", "color: black")
}

//[C] / [AC] button logic to clear the calculator
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

//Number Buttons. Limit to 10 digits (12chars with "." and "-") and prevent multiple 0s in front of a number.
function numberButton(number) {
  if (number === 0 && d.getElementById("input-window").value === "" && d.getElementById("formula").innerHTML === "") return;
  if (number === 0 && d.getElementById("input-window").value === "0") return;

  prerequisites();
  var input = d.getElementById("input-window").value
  if (((input.indexOf(".") && (input.indexOf("-")) < 0) && input.length < 10) || (((input.indexOf(".") && input.indexOf("-")) > 0) && input.length < 12) || (((input.indexOf(".") || input.indexOf("-")) > -1) && input.length < 11)) {
    d.getElementById("input-window").value = d.getElementById("input-window").value + number;
  }
}

//Decimal Button. Allow only one, not at the end, and prepend a 0 if entered before other numbers.
function decimal() {
  prerequisites();
  var val = d.getElementById("input-window").value;
  if (val.toString().length >= 10) return;
  if (!val) d.getElementById("input-window").value = "0";
  if (val.indexOf(".") < 0) d.getElementById("input-window").value = d.getElementById("input-window").value + ".";
}

// Make negative or positive when the +/- button is pressed by multiplying by -1
function plusmin() {
  if (d.getElementById("input-window").value === "") return; //nothing to calculate
  result = eval(d.getElementById("input-window").value + "*-1");
  formatNumber(result)
}

function percent() {
  if (d.getElementById("formula").innerHTML === "") return; //nothing to calculate
  //get the previously entered value (A) * (current value (B) / 100)
  //http://blogs.msdn.com/b/oldnewthing/archive/2008/01/10/7047497.aspx
  var A = d.getElementById("formula").innerHTML.match(/((\d|\.)+)(?!.*\d)/)
  var B = d.getElementById("input-window").value
  var result = eval(A[0] * (B / 100));
  formatNumber(result);
}

// Multiply, divide, add, or subtract and update formula string in the hidden #formula div.
function operate(operator) {
  if (d.getElementById("input-window").value === "") return; //nothing to calculate

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
    result = eval(d.getElementById("formula").innerHTML);
    formatNumber(result);
    d.getElementById("formula").innerHTML = d.getElementById("formula").innerHTML + operator;
  }
}

// Prepare the hidden div formula for eval() and send the results to be formatted and displayed
function equals() {
  fBtnPressed = false;
  if (d.getElementById("input-window").value === "") return; //nothing to calculate

  //Eval doesn't like, for example, 5 minus negative 4 (5--4). Format as (5-4*-1) instead.
  var input = d.getElementById("input-window").value
  if (input < 0) {
    d.getElementById("formula").innerHTML = d.getElementById("formula").innerHTML + (-1 * input) + "*-1";
  } else {
    d.getElementById("formula").innerHTML = d.getElementById("formula").innerHTML + d.getElementById("input-window").value;
  }

  var result = eval(d.getElementById("formula").innerHTML);
  clear = true;
  d.getElementById("formula").innerHTML = "";
  formatNumber(result);
}

//Format number to fit on-screen
function formatNumber(result) {
  var result = result.toString();

  //eval() will return an exponential if > 21 digits. Make it an 11 char exponential to fit on-screen
  if (result.indexOf("e") > -1) {
    var split = result.split("e");
    var num = Number(split[0]).toFixed(5);
    var result = num + "e" + split[1];
    update(result);
  }

  //Do nothing if the number will fit on screen (12 char max with "-" and ".")
  if ((result.length <= 12 && (result.indexOf(".") > -1 && result.indexOf("-") > -1)) || (result.length <= 11 && (result.indexOf(".") > -1 || result.indexOf("-") > -1)) || (result.length <= 10)) {
    update(result);

    //Convert number to exponential if it's More than 10 digits and has no decimal or a decimal after the 10th digit
  } else if ((result.length > 10 && (result.indexOf("-") < 0) && (result.indexOf(".") < 0 || result.indexOf(".") > 9)) || (result.length > 11 && (result.indexOf("-") > -1) && (result.indexOf(".") < 0 || result.indexOf(".") > 10))) {
    var result = Number(result).toExponential(5);
    update(result);

    //At this point we have a positive or negative decimal, run toFixed() to the max length.
  } else if (result.indexOf("-") > -1) {
    var result = Number(result).toFixed(11 - result.indexOf("."));
    update(result);
  } else if (result.indexOf("-") < 0) {
    var result = Number(result).toFixed(10 - result.indexOf("."));
    update(result);
  }
}

function update(result) {
  //trim trailing zeros after the decimal. If left with a trailing decimal, trim that too.
  if (result.indexOf(".") > -1 && result.indexOf("e") < 0) {
    var result = result.replace(/0+$/, "");
    if (result.charAt(result.length - 1) === ".") {
      var result = result.replace(".", "")
      }
  }
  d.getElementById("input-window").value = result;
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