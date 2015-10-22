#Bonfire: Falsy Bouncer
<a href="http://freecodecamp.com/challenges/Bonfire:%20Falsy%20Bouncer?solution=function%20bouncer(arr)%20%7B%0A%20%20var%20newArray%20%3D%20%5B%5D%0A%20%20for(var%20i%20%3D%200%3B%20i%20%3C%20arr.length%3B%20i%2B%2B)%7B%0A%20%20%20%20if%20(arr%5Bi%5D)%20%7B%0A%20%20%20%20%20%20newArray.push(arr%5Bi%5D)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20return%20newArray%3B%0A%7D%0Abouncer(%5B7%2C%20%22ate%22%2C%20%22%22%2C%20false%2C%209%5D%2C%20%22%22)%3B" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Remove all falsy values from an array.</p><p class="wrappable negative-10">Falsy values in javascript are <code>false</code>, <code>null</code>, <code>0</code>, <code>&quot;&quot;</code>, <code>undefined</code>, and <code>NaN</code>.</p><p class="wrappable negative-10">Remember to use <a href="//github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck" target="_blank">Read-Search-Ask</a> if you get stuck. Write your own code.</p><div class="negative-30-bottom"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean" target="_blank">Boolean Objects</a></li></ul></div><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target="_blank">Array.filter()</a></li></ul></div></div></div>


####Answer:
```javascript
function bouncer(arr) {
  var newArray = []
  for(var i = 0; i < arr.length; i++){
    if (arr[i]) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
bouncer([7, "ate", "", false, 9], "");
```