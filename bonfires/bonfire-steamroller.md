#Bonfire: Steamroller
<a href="http://freecodecamp.com/challenges/Bonfire:%20Steamroller?solution=function%20steamroller(arr)%20%7B%0A%0Avar%20flattened%20%3D%20%5B%5D%0A%0Afor(var%20i%20%3D%200%3B%20i%20%3C%20arr.length%3B%20i%2B%2B)%20%7B%0A%20%20if%20(Array.isArray(arr%5Bi%5D))%20%7B%0A%20%20%20%20flattened%20%3D%20flattened.concat(steamroller(arr%5Bi%5D))%0A%20%20%7D%20else%20%7B%0A%20%20%20%20flattened.push(arr%5Bi%5D)%3B%0A%20%20%7D%0A%7D%0A%0A%20%20return%20flattened%3B%20%0A%7D%0A%0Asteamroller(%5B1%2C%20%5B2%5D%2C%20%5B3%2C%20%5B%5B4%5D%5D%5D%5D)%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Flatten a nested array. You must account for varying levels of nesting.</p><p class="wrappable negative-10">Remember to use <a href="//github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck" target="_blank">Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.</p><div class="negative-30-bottom"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray" target="_blank">Array.isArray()</a></li></ul></div></div></div>


####Answer:
```javascript
function steamroller(arr) {

var flattened = []

for(var i = 0; i < arr.length; i++) {
  if (Array.isArray(arr[i])) {
    flattened = flattened.concat(steamroller(arr[i]))
  } else {
    flattened.push(arr[i]);
  }
}

  return flattened; 
}

steamroller([1, [2], [3, [[4]]]]);

```