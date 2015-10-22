#Bonfire: DNA Pairing
<a href="http://freecodecamp.com/challenges/Bonfire:%20DNA%20Pairing?solution=function%20pair(str)%20%7B%0A%0A%20%20var%20G%20%3D%20%5B%22G%22%2C%20%22C%22%5D%3B%0A%20%20var%20C%20%3D%20%5B%22C%22%2C%20%22G%22%5D%3B%0A%20%20var%20A%20%3D%20%5B%22A%22%2C%20%22T%22%5D%3B%0A%20%20var%20T%20%3D%20%5B%22T%22%2C%20%22A%22%5D%3B%0A%20%20var%20arr%20%3D%20%5B%5D%0A%0A%20%20for%20(var%20i%20%3D%200%3B%20i%20%3C%20str.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20if%20(str.charAt(i)%20%3D%3D%3D%20%22G%22)%20%7B%0A%20%20%20%20%20%20arr.push(G)%0A%20%20%20%20%7D%0A%20%20%20%20if%20(str.charAt(i)%20%3D%3D%3D%20%22C%22)%20%7B%0A%20%20%20%20%20%20arr.push(C)%0A%20%20%20%20%7D%0A%20%20%20%20if%20(str.charAt(i)%20%3D%3D%3D%20%22A%22)%20%7B%0A%20%20%20%20%20%20arr.push(A)%0A%20%20%20%20%7D%0A%20%20%20%20if%20(str.charAt(i)%20%3D%3D%3D%20%22T%22)%20%7B%0A%20%20%20%20%20%20arr.push(T)%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20%20%20return%20arr%3B%0A%20%20%7D%0A%0A%20%20pair(%22GCG%22)%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.</p><p class="wrappable negative-10"><a href="http://en.wikipedia.org/wiki/Base_pair" target="_blank">Base pairs</a> are a pair of AT and CG. Match the missing element to the provided character.</p><p class="wrappable negative-10">Return the provided character as the first element in each array.</p><p class="wrappable negative-10">For example, for the input GCG, return [[&quot;G&quot;, &quot;C&quot;], [&quot;C&quot;,&quot;G&quot;],[&quot;G&quot;, &quot;C&quot;]]</p><p class="wrappable negative-10">The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.</p><p class="wrappable negative-10">Remember to use <a href="//github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck" target="_blank">Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.</p><div class="negative-30-bottom"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push" target="_blank">Array.push()</a></li></ul></div><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split" target="_blank">String.split()</a></li></ul></div></div></div>


####Answer:
```javascript
function pair(str) {

  var G = ["G", "C"];
  var C = ["C", "G"];
  var A = ["A", "T"];
  var T = ["T", "A"];
  var arr = []

  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === "G") {
      arr.push(G)
    }
    if (str.charAt(i) === "C") {
      arr.push(C)
    }
    if (str.charAt(i) === "A") {
      arr.push(A)
    }
    if (str.charAt(i) === "T") {
      arr.push(T)
    }
  }

    return arr;
  }

  pair("GCG");

```