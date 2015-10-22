#Waypoint: Use Conditional Logic with If and Else Statements
<a href="http://freecodecamp.com/challenges/Waypoint:%20Use%20Conditional%20Logic%20with%20If%20and%20Else%20Statements?solution=var%20flip%20%3D%20Math.floor(Math.random()%20*%20(1%20-%200%20%2B%201))%20%2B%200%3B%0Afunction%20myFunction()%7B%0A%20%20%2F%2F%20Create%20an%20if-else%20statement%20here%20to%20return%20%22heads%22%20if%20flip%20is%200.%20Otherwise%20return%20%22tails%22.%0A%0A%20%20%2F%2F%20Only%20change%20code%20below%20this%20line.%0Aif%20(flip%20%3D%3D%3D%200)%20%7B%0A%0A%E2%80%89%E2%80%89return%20%22heads%22%3B%0A%0A%7D%20else%20%7B%0A%0A%E2%80%89%E2%80%89return%20%22tails%22%3B%0A%0A%7D%0A%0A%0A%20%20%2F%2F%20Only%20change%20code%20above%20this%20line.%0A%7D%0A%0A%2F%2F%20We%20use%20this%20function%20to%20show%20you%20the%20value%20of%20your%20variable%20in%20your%20output%20box.%0Avar%20result%20%3D%20myFunction()%3Bif(typeof(flip)%20!%3D%3D%20%22undefined%22%20%26%26%20typeof(flip)%20%3D%3D%3D%20%22number%22%20%26%26%20typeof(result)%20!%3D%3D%20%22undefined%22%20%26%26%20typeof(result)%20%3D%3D%3D%20%22string%22)%7B(function(y%2Cz)%7Breturn%20%27flip%20%3D%20%27%20%2B%20y.toString()%20%2B%20%27%2C%20text%20%3D%20%27%20%2B%20z%3B%7D)(flip%2C%20result)%3B%7D%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">We can use <code>if</code> statements in JavaScript to only execute code if a certain condition is met.</p><p class="wrappable negative-10"><code>if</code> statements require some sort of boolean condition to evaluate.</p><p class="wrappable negative-10">For example:</p><p class="wrappable negative-10"><code> if (1 === 2) {</code></p><p class="wrappable negative-10"><code>&#x2009;&#x2009;return true;</code></p><p class="wrappable negative-10"><code>} else {</code></p><p class="wrappable negative-10"><code>&#x2009;&#x2009;return false;</code></p><p class="wrappable negative-10"><code>}</code></p><p class="wrappable negative-10">Let&apos;s use <code>if</code> and <code>else</code> statements to make a coin-flip game.</p><p class="wrappable negative-10">Create <code>if</code> and <code>else</code> statements to return the string <code>&quot;heads&quot;</code> if the flip variable is zero, or else return the string <code>&quot;tails&quot;</code> if the flip variable is not zero.</p><div class="negative-bottom-margin-30"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p></div></div>


####Answer:
```javascript
var flip = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
function myFunction(){
  // Create an if-else statement here to return "heads" if flip is 0. Otherwise return "tails".

  // Only change code below this line.
if (flip === 0) {

  return "heads";

} else {

  return "tails";

}


  // Only change code above this line.
}

// We use this function to show you the value of your variable in your output box.
var result = myFunction();if(typeof(flip) !== "undefined" && typeof(flip) === "number" && typeof(result) !== "undefined" && typeof(result) === "string"){(function(y,z){return 'flip = ' + y.toString() + ', text = ' + z;})(flip, result);}

```