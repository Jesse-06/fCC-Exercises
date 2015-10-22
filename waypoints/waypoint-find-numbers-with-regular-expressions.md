#Waypoint: Find Numbers with Regular Expressions
<a href="http://freecodecamp.com/challenges/Waypoint:%20Find%20Numbers%20with%20Regular%20Expressions?solution=var%20test%20%3D%20(function()%20%7B%0A%20%20var%20testString%20%3D%20%22There%20are%203%20cats%20but%204%20dogs.%22%3B%0A%0A%20%20%2F%2F%20Only%20change%20code%20below%20this%20line.%0A%0A%20%20var%20expression%20%3D%20%2F%5Cd%2B%2Fgi%3B%0A%0A%20%20%2F%2F%20Only%20change%20code%20above%20this%20line.%0A%20%20%2F%2F%20We%20use%20this%20function%20to%20show%20you%20the%20value%20of%20your%20variable%20in%20your%20output%20box.%0A%20%20return%20testString.match(expression).length%3B%0A%7D)()%3B(function()%7Breturn%20test%3B%7D)()%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">We can use special selectors in <code>Regular Expressions</code> to select a particular type of value.</p><p class="wrappable negative-10">One such selector is the digit selector <code>\d</code> which is used to grab the numbers in a string.</p><p class="wrappable negative-10">It is used like this: <code>/\d/g</code>.</p><p class="wrappable negative-10">For numbers this is often written as <code>/\d+/g</code>, where the <code>+</code> following the digit selector allows this regular expression to match multi-digit numbers.</p><p class="wrappable negative-10">Use the <code>\d</code> selector to select the number of numbers in the string, allowing for the possibility of multi-digit numbers.</p><div class="negative-bottom-margin-30"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p></div></div>


####Answer:
```javascript
var test = (function() {
  var testString = "There are 3 cats but 4 dogs.";

  // Only change code below this line.

  var expression = /\d+/gi;

  // Only change code above this line.
  // We use this function to show you the value of your variable in your output box.
  return testString.match(expression).length;
})();(function(){return test;})();

```