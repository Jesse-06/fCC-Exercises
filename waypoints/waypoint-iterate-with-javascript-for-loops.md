#Waypoint: Iterate with JavaScript For Loops
<a href="http://freecodecamp.com/challenges/Waypoint:%20Iterate%20with%20JavaScript%20For%20Loops?solution=ourArray%20%3D%20%5B%5D%3B%0Afor(var%20i%20%3D%200%3B%20i%20%3C%205%3B%20i%2B%2B)%7B%0A%20%20ourArray.push(i)%3B%0A%7D%0Avar%20myArray%20%3D%20%5B%5D%3B%0A%0A%2F%2F%20Only%20change%20code%20below%20this%20line.%0A%0A%2F%2F%20Push%20the%20numbers%20zero%20through%20four%20to%20myArray%20using%20a%20%22for%20loop%22%20like%20above.%0Afor(var%20i%20%3D%200%3B%20i%20%3C%205%3B%20i%2B%2B)%20%7B%0A%20%20myArray.push(i)%3B%0A%7D%0A%0A%2F%2F%20Only%20change%20code%20above%20this%20line.%0A%2F%2F%20We%20use%20this%20function%20to%20show%20you%20the%20value%20of%20your%20variable%20in%20your%20output%20box.%0A%2F%2F%20You%27ll%20learn%20about%20functions%20soon.%0Aif(typeof(myArray)%20!%3D%3D%20%22undefined%22)%7B(function()%7Breturn%20myArray%3B%7D)()%3B%7D%0A%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">You can run the same code multiple times by using a loop.</p><p class="wrappable negative-10">The most common type of JavaScript loop is called a &quot;for loop&quot; because it runs &quot;for&quot; a specific number of times.</p><p class="wrappable negative-10"><code>var ourArray = [];</code></p><p class="wrappable negative-10"><code>for(var i = 0; i &lt; 5; i++) {</code></p><p class="wrappable negative-10"><code>&#x2009;&#x2009;ourArray.push(i);</code></p><p class="wrappable negative-10"><code>}</code></p><p class="wrappable negative-10"><code>ourArray</code> will now contain [0,1,2,3,4] </p><p class="wrappable negative-10">Let&apos;s try getting a for loop to work by pushing values to an array.</p><div class="negative-bottom-margin-30"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p></div></div>


####Answer:
```javascript
ourArray = [];
for(var i = 0; i < 5; i++){
  ourArray.push(i);
}
var myArray = [];

// Only change code below this line.

// Push the numbers zero through four to myArray using a "for loop" like above.
for(var i = 0; i < 5; i++) {
  myArray.push(i);
}

// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
if(typeof(myArray) !== "undefined"){(function(){return myArray;})();}


```