#Waypoint: Generate Random Whole Numbers within a Range
<a href="http://freecodecamp.com/challenges/Waypoint:%20Generate%20Random%20Whole%20Numbers%20within%20a%20Range?solution=var%20min%20%3D%200%3B%0Avar%20max%20%3D%209%3B%0Afunction%20myFunction()%20%7B%0A%20%20%2F%2F%20Make%20myFunction%20return%20a%20random%20number%20between%20zero%20and%20nine%20instead%20of%20a%20decimal%0A%20%20%2F%2F%20Only%20change%20code%20below%20this%20line.%0A%0A%20%20return%20Math.floor(Math.random()%20*%20(max%20-%20min%20%2B%201))%20%2B%20min%3B%0A%7D%0A%0A%2F%2F%20Only%20change%20code%20above%20this%20line.%0A%2F%2F%20We%20use%20this%20function%20to%20show%20you%20the%20value%20of%20your%20variable%20in%20your%20output%20box.%0A(function()%7Breturn%20myFunction()%3B%7D)()%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">We can use a certain mathematical expression to get a random number between two numbers.</p><p class="wrappable negative-10"><code>Math.floor(Math.random() * (max - min + 1)) + min</code></p><p class="wrappable negative-10">By using this, we can control the output of a random number.</p><div class="negative-bottom-margin-30"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p></div></div>


####Answer:
```javascript
var min = 0;
var max = 9;
function myFunction() {
  // Make myFunction return a random number between zero and nine instead of a decimal
  // Only change code below this line.

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
(function(){return myFunction();})();

```