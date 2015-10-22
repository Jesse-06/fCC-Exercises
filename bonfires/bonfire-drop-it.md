#Bonfire: Drop it
<a href="http://freecodecamp.com/challenges/Bonfire:%20Drop%20it?solution=function%20drop(arr%2C%20func)%20%7B%0A%20%20%0A%20%20while(func(arr%5B0%5D)%20%3D%3D%3D%20false%20%26%26%20arr.length%20%3E%200)%20%7B%0A%20%20%20%20arr.shift(arr%5B0%5D)%3B%0A%20%20%7D%0A%0A%20%20return%20arr%3B%0A%7D%0A%0Adrop(%5B1%2C%202%2C%203%2C%204%5D%2C%20function(n)%20%7Breturn%20n%20%3E%205%3B%7D)" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.</p><p class="wrappable negative-10">Remember to use <a href="//github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck" target="_blank">Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.</p><div class="negative-30-bottom"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments" target="_blank">Arguments object</a></li></ul></div><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift" target="_blank">Array.shift()</a></li></ul></div></div></div>


####Answer:
```javascript
function drop(arr, func) {
  
  while(func(arr[0]) === false && arr.length > 0) {
    arr.shift(arr[0]);
  }

  return arr;
}

drop([1, 2, 3, 4], function(n) {return n > 5;})
```