#Waypoint: Split Strings with split
<a href="http://freecodecamp.com/challenges/Waypoint:%20Split%20Strings%20with%20split?solution=var%20string%20%3D%20%22Split%20me%20into%20an%20array%22%3B%0A%2F%2F%20Only%20change%20code%20below%20this%20line.%0A%0Avar%20array%20%3D%20string%3B%0Aarray%20%3D%20string.split(%27%20%27)%3B%0A%2F%2F%20Only%20change%20code%20above%20this%20line.%0A(function()%20%7Breturn%20array%3B%7D)()%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">You can use the <code>.split()</code> method to split a string into an array.</p><p class="wrappable negative-10"><code>.split()</code> uses the argument you pass in as a delimiter to determine which points the string should be split at.</p><p class="wrappable negative-10"><code>var array = string.split(&apos; &apos;);</code></p><p class="wrappable negative-10">Use <code>.split()</code> to create an array of words from <code>string</code> and assign it to <code>array</code>.</p><div class="negative-bottom-margin-30"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split" target="_blank">String.split()</a></li></ul></div></div></div>


####Answer:
```javascript
var string = "Split me into an array";
// Only change code below this line.

var array = string;
array = string.split(' ');
// Only change code above this line.
(function() {return array;})();

```