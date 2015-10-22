#Bonfire: Missing letters
<a href="http://freecodecamp.com/challenges/Bonfire:%20Missing%20letters?solution=function%20fearNotLetter(str)%20%7B%0A%20%20for(i%3D0%3Bi%3Cstr.length-1%3Bi%2B%2B)%20%7B%0A%20%20%20%20if(str.charCodeAt(i%2B1)-str.charCodeAt(i)%20!%3D%3D%201)%20%7B%0A%20%20%20%20%20%20var%20str%20%3D%20String.fromCharCode(str.charCodeAt(i)%20%2B%201)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20if%20(str.length%20%3D%3D%3D%201)%20%7Breturn%20str%3B%7D%20else%20%7Breturn%20undefined%3B%7D%0A%7D%0AfearNotLetter(%22abce%22)%3B" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Find the missing letter in the passed letter range and return it.</p><p class="wrappable negative-10">If all letters are present in the range, return undefined.</p><p class="wrappable negative-10">Remember to use <a href="//github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck" target="_blank">Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.</p><div class="negative-30-bottom"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt" target="_blank">String.charCodeAt()</a></li></ul></div><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode" target="_blank">String.fromCharCode()</a></li></ul></div></div></div>


####Answer:
```javascript
function fearNotLetter(str) {
  for(i=0;i<str.length-1;i++) {
    if(str.charCodeAt(i+1)-str.charCodeAt(i) !== 1) {
      var str = String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
  if (str.length === 1) {return str;} else {return undefined;}
}
fearNotLetter("abce");
```