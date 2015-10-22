#Bonfire: Arguments Optional
<a href="http://freecodecamp.com/challenges/Bonfire:%20Arguments%20Optional?solution=function%20add(x)%20%7B%0A%20%20%0A%20%20if(!arguments%5B0%5D)%20return%20undefined%3B%0A%20%20%0A%20%20if(!arguments%5B1%5D)%20%7B%0A%20%20%20%20if(typeof%20arguments%5B0%5D%20!%3D%20%22number%22)%20return%20undefined%3B%0A%20%20%20%20%0A%20%20%20%20return%20function(y)%20%7B%0A%20%20%20%20%20%20if(typeof%20arguments%5B0%5D%20!%3D%22number%22)%20return%20undefined%3B%0A%20%20%20%20%20%20sum%20%3D%20x%20%2B%20y%3B%0A%20%20%20%20%20%20console.log(sum)%0A%20%20%20%20%20%20return%20sum%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%0A%20%20if(typeof%20arguments%5B0%5D%20!%3D%20%22number%22%20%7C%7C%20typeof%20arguments%5B1%5D%20!%3D%20%22number%22)%20%7B%0A%20%20%20%20return%20undefined%3B%0A%20%20%7D%0A%0A%20%20var%20argArray%20%3D%20%5B%5D.slice.apply(arguments)%3B%0A%20%20var%20sum%20%3D%20argArray.reduce(function(a%2C%20b)%20%7B%0A%20%20%20%20return%20a%20%2B%20b%0A%20%20%7D)%0A%20%20%0A%20%20return%20sum%3B%0A%7D%0A%0Aadd(2)(%5B3%5D)" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.</p><p class="wrappable negative-10">For example, <code>add(2, 3)</code> should return <code>5</code>, and <code>add(2)</code> should return a function.</p><p class="wrappable negative-10">Calling this returned function with a single argument will then return the sum:</p><p class="wrappable negative-10"><code>var sumTwoAnd = add(2);</code></p><p class="wrappable negative-10"><code>sumTwoAnd(3)</code> returns <code>5</code>.</p><p class="wrappable negative-10">If either argument isn&apos;t a valid number, return undefined.</p><p class="wrappable negative-10">Remember to use <a href="//github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck" target="_blank">Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.</p><div class="negative-30-bottom"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures" target="_blank">Closures</a></li></ul></div><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments" target="_blank">Arguments object</a></li></ul></div></div></div>


####Answer:
```javascript
function add(x) {
  
  if(!arguments[0]) return undefined;
  
  if(!arguments[1]) {
    if(typeof arguments[0] != "number") return undefined;
    
    return function(y) {
      if(typeof arguments[0] !="number") return undefined;
      sum = x + y;
      console.log(sum)
      return sum;
    }
  }
  
  if(typeof arguments[0] != "number" || typeof arguments[1] != "number") {
    return undefined;
  }

  var argArray = [].slice.apply(arguments);
  var sum = argArray.reduce(function(a, b) {
    return a + b
  })
  
  return sum;
}

add(2)([3])
```