#Waypoint: Iterate with JavaScript While Loops
<a href="http://freecodecamp.com/challenges/Waypoint:%20Iterate%20with%20JavaScript%20While%20Loops?solution=var%20myArray%20%3D%20%5B%5D%3B%0A%2F%2F%20Only%20change%20code%20below%20this%20line.%0Avar%20i%20%3D%200%3B%0A%2F%2F%20Push%20the%20numbers%20zero%20through%20four%20to%20myArray%20using%20a%20%22while%20loop%22.%0Awhile(i%20%3C%205)%20%7B%0A%20%20myArray.push(i)%3B%0A%20%20i%2B%2B%3B%0A%7D%0A%2F%2F%20Only%20change%20code%20above%20this%20line.%0A%2F%2F%20We%20use%20this%20function%20to%20show%20you%20the%20value%20of%20your%20variable%20in%20your%20output%20box.%0A%2F%2F%20You%27ll%20learn%20about%20functions%20soon.%0Aif(typeof(myArray)%20!%3D%3D%20%22undefined%22)%7B(function()%7Breturn%20myArray%3B%7D)()%3B%7D%0A%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">You can run the same code multiple times by using a loop.</p><p class="wrappable negative-10">Another type of JavaScript loop is called a &quot;while loop&quot;, because it runs &quot;while&quot; something is true and stops once that something is no longer true.</p><p class="wrappable negative-10"><code>var ourArray = [];</code></p><p class="wrappable negative-10"><code>var i = 0;</code></p><p class="wrappable negative-10"><code>while(i &lt; 5) {</code></p><p class="wrappable negative-10"><code>&#x2009;&#x2009;ourArray.push(i);</code></p><p class="wrappable negative-10"><code>&#x2009;&#x2009;i++;</code></p><p class="wrappable negative-10"><code>}</code></p><p class="wrappable negative-10">Let&apos;s try getting a while loop to work by pushing values to an array.</p><div class="negative-bottom-margin-30"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p></div></div>


####Answer:
```javascript
var myArray = [];
// Only change code below this line.
var i = 0;
// Push the numbers zero through four to myArray using a "while loop".
while(i < 5) {
  myArray.push(i);
  i++;
}
// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
if(typeof(myArray) !== "undefined"){(function(){return myArray;})();}


```