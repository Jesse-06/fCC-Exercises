#Bonfire: Slasher Flick
<a href="http://freecodecamp.com/challenges/Bonfire:%20Slasher%20Flick?solution=function%20slasher(arr%2C%20howMany)%20%7B%0A%20%20for(var%20i%20%3D%200%3B%20i%20%3C%20howMany%3B%20i%2B%2B)%20%7B%0A%09%20%20arr.shift()%3B%0A%20%20%7D%0A%20%20return%20arr%3B%0A%7D%0Aslasher(%5B1%2C%202%2C%203%5D%2C%202%2C%20%22%22)%3B" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Return the remaining elements of an array after chopping off n elements from the head.</p><p class="wrappable negative-10">The head meaning the beginning of the array, or the zeroth index</p><p class="wrappable negative-10">Remember to use <a href="//github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck" target="_blank">Read-Search-Ask</a> if you get stuck. Write your own code.</p><div class="negative-30-bottom"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" target="_blank">Array.slice()</a></li></ul></div><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice" target="_blank">Array.splice()</a></li></ul></div></div></div>


####Answer:
```javascript
function slasher(arr, howMany) {
  for(var i = 0; i < howMany; i++) {
	  arr.shift();
  }
  return arr;
}
slasher([1, 2, 3], 2, "");
```