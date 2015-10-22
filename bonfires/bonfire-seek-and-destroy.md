#Bonfire: Seek and Destroy
<a href="http://freecodecamp.com/challenges/Bonfire:%20Seek%20and%20Destroy?solution=function%20destroyer(arr)%20%7B%0A%20%20for(var%20i%20%3D%201%3B%20i%20%3C%20arguments.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20while(arr.indexOf(arguments%5Bi%5D)%20!%3D%20-1)%20%7B%0A%20%20%20%20%20%20arr.splice(arr.indexOf(arguments%5Bi%5D)%2C%201)%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20return%20arr%3B%0A%7D%0A%0Adestroyer(%5B1%2C%202%2C%203%2C%201%2C%202%2C%203%5D%2C%202%2C%203%2C%20%22%22)%3B" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.</p><p class="wrappable negative-10">Remember to use <a href="//github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck" target="_blank">Read-Search-Ask</a> if you get stuck. Write your own code.</p><div class="negative-30-bottom"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments" target="_blank">Arguments object</a></li></ul></div><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target="_blank">Array.filter()</a></li></ul></div></div></div>


####Answer:
```javascript
function destroyer(arr) {
  for(var i = 1; i < arguments.length; i++) {
    while(arr.indexOf(arguments[i]) != -1) {
      arr.splice(arr.indexOf(arguments[i]), 1)
    }
  }
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3, "");
```