#Bonfire: Diff Two Arrays
<a href="http://freecodecamp.com/challenges/Bonfire:%20Diff%20Two%20Arrays?solution=function%20diff(arr1%2C%20arr2)%20%7B%0A%20%20var%20newArr%20%3D%20%5B%5D%3B%0A%0A%20%20for%20(var%20i%20%3D%200%3B%20i%20%3C%20arr1.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20if%20(arr2.indexOf(arr1%5Bi%5D)%20%3D%3D%3D%20-1)%20%7B%0A%20%20%20%20%20%20newArr.push(arr1%5Bi%5D)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20for%20(i%20%3D%200%3B%20i%20%3C%20arr2.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20if%20(arr1.indexOf(arr2%5Bi%5D)%20%3D%3D%3D%20-1)%20%7B%0A%20%20%20%20%20%20newArr.push(arr2%5Bi%5D)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20return%20newArr%3B%0A%0A%7D%0A%0Adiff(%5B1%2C%202%2C%203%2C%205%5D%2C%20%5B1%2C%202%2C%203%2C%204%2C%205%5D)%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Compare two arrays and return a new array with any items not found in both of the original arrays.</p><p class="wrappable negative-10">Remember to use <a href="//github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck" target="_blank">Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.</p><div class="negative-30-bottom"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators" target="_blank">Comparison Operators</a></li></ul></div><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" target="_blank">Array.slice()</a></li></ul></div><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target="_blank">Array.filter()</a></li></ul></div><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf" target="_blank">Array.indexOf()</a></li></ul></div><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat" target="_blank">Array.concat()</a></li></ul></div></div></div>


####Answer:
```javascript
function diff(arr1, arr2) {
  var newArr = [];

  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }

  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      newArr.push(arr2[i]);
    }
  }

  return newArr;

}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

```