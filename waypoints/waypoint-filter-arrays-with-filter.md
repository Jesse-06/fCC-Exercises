#Waypoint: Filter Arrays with filter
<a href="http://freecodecamp.com/challenges/Waypoint:%20Filter%20Arrays%20with%20filter?solution=var%20array%20%3D%20%5B1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%5D%3B%0A%20%20%2F%2F%20Only%20change%20code%20below%20this%20line.%0Aarray%20%3D%20array.filter(function(val)%20%7B%0A%0A%E2%80%89%E2%80%89return%20val%20%3C%3D%205%3B%0A%0A%7D)%3B%0A%0A%0A%20%20%2F%2F%20Only%20change%20code%20above%20this%20line.%0A(function()%20%7Breturn%20array%3B%7D)()%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Filter is a useful method that can filter out values that don&apos;t match a certain criteria</p><p class="wrappable negative-10">Let&apos;s remove all the values greater than five</p><p class="wrappable negative-10"><code>array = array.filter(function(val) {</code></p><p class="wrappable negative-10"><code>&#x2009;&#x2009;return val <= 5;<="" code=""></=></code></p><p class="wrappable negative-10"><code>});</code></p><div class="negative-bottom-margin-30"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target="_blank">Array.filter()</a></li></ul></div></div></div>


####Answer:
```javascript
var array = [1,2,3,4,5,6,7,8,9,10];
  // Only change code below this line.
array = array.filter(function(val) {

  return val <= 5;

});


  // Only change code above this line.
(function() {return array;})();

```