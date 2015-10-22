#Waypoint: Join Strings with join
<a href="http://freecodecamp.com/challenges/Waypoint:%20Join%20Strings%20with%20join?solution=var%20joinMe%20%3D%20%5B%22Split%22%2C%22me%22%2C%22into%22%2C%22an%22%2C%22array%22%5D%3B%0A%2F%2F%20Only%20change%20code%20below%20this%20line.%0A%0Avar%20joinMe%20%3D%20joinMe.join(%22%20%22)%3B%0A%0A%2F%2F%20Only%20change%20code%20above%20this%20line.%0A(function()%20%7Breturn%20joinMe%3B%7D)()%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">We can use the <code>.join()</code> method to join each element in an array into a string separated by whatever delimiter you provide as an argument to the join operation.</p><p class="wrappable negative-10"><code>var joinMe = joinMe.join(&quot; &quot;);</code></p><p class="wrappable negative-10">Use the <code>.join()</code> method to create a string from <code>joinMe</code> with spaces in between each element and assign it back to <code>joinMe</code>.</p><div class="negative-bottom-margin-30"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join" target="_blank">Array.join()</a></li></ul></div></div></div>


####Answer:
```javascript
var joinMe = ["Split","me","into","an","array"];
// Only change code below this line.

var joinMe = joinMe.join(" ");

// Only change code above this line.
(function() {return joinMe;})();

```