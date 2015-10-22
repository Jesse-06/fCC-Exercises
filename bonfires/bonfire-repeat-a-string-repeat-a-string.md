#Bonfire: Repeat a string repeat a string
<a href="http://freecodecamp.com/challenges/Bonfire:%20Repeat%20a%20string%20repeat%20a%20string?solution=function%20repeat(str%2C%20num)%20%7B%0A%20%20if%20(num%20%3C%3D%200)%20return(%22%22)%0A%20%20console.log(str.repeat(num))%0A%20%20return%20str.repeat(num)%3B%0A%7D%0Arepeat(%22abc%22%2C%203%2C%20%22%22)%3B" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.</p><p class="wrappable negative-10">Remember to use <a href="//github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck" target="_blank">Read-Search-Ask</a> if you get stuck. Write your own code.</p><div class="negative-30-bottom"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank">Global String Object</a></li></ul></div></div></div>


####Answer:
```javascript
function repeat(str, num) {
  if (num <= 0) return("")
  console.log(str.repeat(num))
  return str.repeat(num);
}
repeat("abc", 3, "");
```