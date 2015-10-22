#Bonfire: Where do I belong
<a href="http://freecodecamp.com/challenges/Bonfire:%20Where%20do%20I%20belong?solution=function%20where(arr%2C%20num)%20%7B%0A%20%20arr.push(num)%0A%20%20arr.sort(function%20compareNumbers(a%2C%20b)%20%7Breturn%20a%20-%20b%3B%7D)%0A%20%20return%20arr.indexOf(num)%3B%0A%7D%0Awhere(%5B40%2C%2060%5D%2C%2050%2C%20%22%22)%3B" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Return the lowest index at which a value (second argument) should be inserted into a sorted array (first argument).</p><p class="wrappable negative-10">For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (0th index), but less than 2 (1st index).</p><p class="wrappable negative-10">Remember to use <a href="//github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck" target="_blank">Read-Search-Ask</a> if you get stuck. Write your own code.</p><div class="negative-30-bottom"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" target="_blank">Array.sort()</a></li></ul></div></div></div>


####Answer:
```javascript
function where(arr, num) {
  arr.push(num)
  arr.sort(function compareNumbers(a, b) {return a - b;})
  return arr.indexOf(num);
}
where([40, 60], 50, "");
```