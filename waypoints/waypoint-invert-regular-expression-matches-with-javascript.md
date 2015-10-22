#Waypoint: Invert Regular Expression Matches with JavaScript
<a href="http://freecodecamp.com/challenges/Waypoint:%20Invert%20Regular%20Expression%20Matches%20with%20JavaScript?solution=var%20test%20%3D%20(function()%7B%0A%20%20var%20testString%20%3D%20%22How%20many%20non-space%20characters%20are%20there%20in%20this%20sentence%3F%22%3B%0A%0A%20%20%2F%2F%20Only%20change%20code%20below%20this%20line.%0A%0A%20%20var%20expression%20%3D%20%2F%5CS%2Fgi%3B%0A%0A%20%20%2F%2F%20Only%20change%20code%20above%20this%20line.%0A%20%20%2F%2F%20We%20use%20this%20function%20to%20show%20you%20the%20value%20of%20your%20variable%20in%20your%20output%20box.%0A%20%20return%20testString.match(expression).length%3B%0A%7D)()%3B(function()%7Breturn%20test%3B%7D)()%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Use <code>/\S/g</code> to match everything that isn&apos;t a space in the string.</p><p class="wrappable negative-10">You can invert any match by using the uppercase version of the selector <code>\s</code> versus <code>\S</code> for example.</p><div class="negative-bottom-margin-30"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p></div></div>


####Answer:
```javascript
var test = (function(){
  var testString = "How many non-space characters are there in this sentence?";

  // Only change code below this line.

  var expression = /\S/gi;

  // Only change code above this line.
  // We use this function to show you the value of your variable in your output box.
  return testString.match(expression).length;
})();(function(){return test;})();

```