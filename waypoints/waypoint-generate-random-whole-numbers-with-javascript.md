#Waypoint: Generate Random Whole Numbers with JavaScript
<a href="http://freecodecamp.com/challenges/Waypoint:%20Generate%20Random%20Whole%20Numbers%20with%20JavaScript?solution=function%20myFunction()%7B%0A%20%20%2F%2F%20Make%20myFunction%20return%20a%20random%20number%20between%20zero%20and%20nine%20instead%20of%20a%20decimal.%0A%0A%20%20%2F%2F%20Only%20change%20code%20below%20this%20line.%0A%0A%20%20return%20Math.floor(Math.random()*10)%3B%0A%0A%20%20%2F%2F%20Only%20change%20code%20above%20this%20line.%0A%7D%0A%0A%2F%2F%20We%20use%20this%20function%20to%20show%20you%20the%20value%20of%20your%20variable%20in%20your%20output%20box.%0A(function()%7Breturn%20myFunction()%3B%7D)()%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">It&apos;s great that we can create random decimal numbers, but it&apos;s even more useful if we use it to generate a random whole number.</p><p class="wrappable negative-10">To achieve this we can multiply the random number by ten and use the <code>Math.floor()</code> to convert the decimal number to the nearest less than or equal whole number.</p><p class="wrappable negative-10">This technique gives us a whole number between zero and nine.</p><p class="wrappable negative-10">Example:</p><p class="wrappable negative-10"><code>Math.floor(Math.random()*10);</code></p><p class="wrappable negative-10">Let&apos;s give this technique a go now.</p><div class="negative-bottom-margin-30"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p></div></div>


####Answer:
```javascript
function myFunction(){
  // Make myFunction return a random number between zero and nine instead of a decimal.

  // Only change code below this line.

  return Math.floor(Math.random()*10);

  // Only change code above this line.
}

// We use this function to show you the value of your variable in your output box.
(function(){return myFunction();})();

```