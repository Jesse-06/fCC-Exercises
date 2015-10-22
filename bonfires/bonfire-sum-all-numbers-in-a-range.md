#Bonfire: Sum All Numbers in a Range
<a href="http://freecodecamp.com/challenges/Bonfire:%20Sum%20All%20Numbers%20in%20a%20Range?solution=function%20sumAll(arr)%20%7B%0A%20%20var%20max%20%3D%20Math.max.apply(null%2C%20arr)%0A%20%20var%20min%20%3D%20Math.min.apply(null%2C%20arr)%0A%20%20var%20sum%20%3D%200%3B%0A%0A%20%20for%20(%20var%20i%20%3D%20max%3B%20i%20%3E%3D%20min%3B%20i--%20)%20%7B%0A%20%20%20%20sum%20%2B%3D%20i%0A%20%20%7D%0A%20%20return%20sum%3B%0A%7D%0A%0AsumAll(%5B1%2C%204%5D)%3B" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">We&apos;ll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.</p><p class="wrappable negative-10">The lowest number will not always come first.</p><p class="wrappable negative-10">Remember to use <a href="//github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck" target="_blank">Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.</p><div class="negative-30-bottom"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max" target="_blank">Math.max()</a></li></ul></div><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min" target="_blank">Math.min()</a></li></ul></div><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" target="_blank">Array.reduce()</a></li></ul></div></div></div>


####Answer:
```javascript
function sumAll(arr) {
  var max = Math.max.apply(null, arr)
  var min = Math.min.apply(null, arr)
  var sum = 0;

  for ( var i = max; i >= min; i-- ) {
    sum += i
  }
  return sum;
}

sumAll([1, 4]);
```