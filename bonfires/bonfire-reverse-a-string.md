#Bonfire: Reverse a String
<a href="http://freecodecamp.com/challenges/Bonfire:%20Reverse%20a%20String?solution=function%20reverseString(str)%20%7B%0A%20%20return%20str.split(%27%27).reverse().join(%27%27)%3B%0A%7D%0A%0AreverseString(%22hello%22%2C%20%22%22)%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Reverse the provided string.</p><p class="wrappable negative-10">You may need to turn the string into an array before you can reverse it.</p><p class="wrappable negative-10">Your result must be a string.</p><p class="wrappable negative-10">Remember to use <a href="//github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck" target="_blank">Read-Search-Ask</a> if you get stuck. Write your own code.</p><div class="negative-30-bottom"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank">Global String Object</a></li></ul></div><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split" target="_blank">String.split()</a></li></ul></div><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse" target="_blank">Array.reverse()</a></li></ul></div><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join" target="_blank">Array.join()</a></li></ul></div></div></div>


####Answer:
```javascript
function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello", "");

```