#Waypoint: Iterate over Arrays with map
<a href="http://freecodecamp.com/challenges/Waypoint:%20Iterate%20over%20Arrays%20with%20map?solution=%2F%2FUse%20map%20to%20add%20three%20to%20each%20value%20in%20the%20array%0Avar%20array%20%3D%20%5B1%2C2%2C3%2C4%2C5%5D%3B%0A%2F%2F%20Only%20change%20code%20below%20this%20line.%0Aarray%20%3D%20array.map(function(val)%20%7B%0A%20%20return%20val%20%2B%203%3B%0A%7D)%3B%0A%0A%0A%2F%2F%20Only%20change%20code%20above%20this%20line.%0A(function()%20%7Breturn%20array%3B%7D)()%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">The map method is one of the easiest ways to iterate through an array or object there is. Let&apos;s use it now.</p><p class="wrappable negative-10"><code>array = array.map(function(val){</code></p><p class="wrappable negative-10"><code>&#x2009;&#x2009;return val+1;</code></p><p class="wrappable negative-10"><code>});</code></p><p class="wrappable negative-10"></p><p class="wrappable negative-10">Use the map function to add 3 to every value in the variable <code>array</code>.</p><div class="negative-bottom-margin-30"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank">Array.map()</a></li></ul></div></div></div>


####Answer:
```javascript
//Use map to add three to each value in the array
var array = [1,2,3,4,5];
// Only change code below this line.
array = array.map(function(val) {
  return val + 3;
});


// Only change code above this line.
(function() {return array;})();

```