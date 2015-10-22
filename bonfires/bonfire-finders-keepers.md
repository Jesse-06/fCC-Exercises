#Bonfire: Finders Keepers
<a href="http://freecodecamp.com/challenges/Bonfire:%20Finders%20Keepers?solution=function%20find(arr%2C%20func)%20%7B%0A%20%20var%20num%20%3D%200%3B%0A%20%20if%20(arr.some(func)%20%3D%3D%3D%20false)%20return%20undefined%3B%0A%0A%20%20for(var%20i%20%3D%200%3B%20i%20%3C%20arr.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20if(%5Barr%5Bi%5D%5D.some(func)%20%3D%3D%3D%20true)%20%7B%0A%20%20%20%20%20%20num%20%3D%20arr%5Bi%5D%0A%20%20%20%20%20%20return%20num%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Afind(%5B1%2C%202%2C%203%2C%204%5D%2C%20function(num)%7B%20return%20num%20%25%202%20%3D%3D%3D%200%3B%20%7D)%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).</p><p class="wrappable negative-10">Remember to use <a href="//github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck" target="_blank">Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.</p><div class="negative-30-bottom"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some" target="_blank">Array.some()</a></li></ul></div></div></div>


####Answer:
```javascript
function find(arr, func) {
  var num = 0;
  if (arr.some(func) === false) return undefined;

  for(var i = 0; i < arr.length; i++) {
    if([arr[i]].some(func) === true) {
      num = arr[i]
      return num;
    }
  }
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });

```