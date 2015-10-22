#Waypoint: Condense arrays with reduce
<a href="http://freecodecamp.com/challenges/Waypoint:%20Condense%20arrays%20with%20reduce?solution=var%20array%20%3D%20%5B4%2C5%2C6%2C7%2C8%5D%3B%0Avar%20singleVal%20%3D%200%3B%0A%2F%2F%20Only%20change%20code%20below%20this%20line.%0Avar%20singleVal%20%3D%20array.reduce(function(previousVal%2C%20currentVal)%20%7B%0A%20%20return%20previousVal%2BcurrentVal%3B%0A%7D)%3B%0A%0A%0A%2F%2F%20Only%20change%20code%20above%20this%20line.%0A(function()%20%7Breturn%20singleVal%3B%7D)()%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Reduce can be useful for condensing an array of numbers into one value.</p><p class="wrappable negative-10"><code>var singleVal = array.reduce(function(previousVal, currentVal){</code></p><p class="wrappable negative-10"><code>&#x2009;&#x2009;return previousVal+currentVal;</code></p><p class="wrappable negative-10"><code>});</code></p><p class="wrappable negative-10">Use the <code>reduce</code> function to sum all the values in <code>array</code> and assign it to <code>singleVal</code>.</p><div class="negative-bottom-margin-30"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" target="_blank">Array.reduce()</a></li></ul></div></div></div>


####Answer:
```javascript
var array = [4,5,6,7,8];
var singleVal = 0;
// Only change code below this line.
var singleVal = array.reduce(function(previousVal, currentVal) {
  return previousVal+currentVal;
});


// Only change code above this line.
(function() {return singleVal;})();

```