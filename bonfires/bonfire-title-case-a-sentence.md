#Bonfire: Title Case a Sentence
<a href="http://freecodecamp.com/challenges/Bonfire:%20Title%20Case%20a%20Sentence?solution=function%20titleCase(str)%20%7B%0A%20%20str%20%3D%20str.replace(%2F%5Cw%2B%5CS*%2Fg%2C%20function(s)%7B%0A%20%20%20%20return%20s.charAt(0).toUpperCase()%20%2B%20s.substr(1).toLowerCase()%3B%0A%20%20%20%20%7D)%3B%0A%20%20return%20str%3B%0A%7D%0AtitleCase(%22HERE%20IS%20MY%20HANDLE%20HERE%20IS%20MY%20SPOUT%22%2C%20%22%22)%3B" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.</p><p class="wrappable negative-10">For the purpose of this exercise, you should also capitalize connecting words like &quot;the&quot; and &quot;of&quot;.</p><p class="wrappable negative-10">Remember to use <a href="//github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck" target="_blank">Read-Search-Ask</a> if you get stuck. Write your own code.</p><div class="negative-30-bottom"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt" target="_blank">String.charAt()</a></li></ul></div></div></div>


####Answer:
```javascript
function titleCase(str) {
  str = str.replace(/\w+\S*/g, function(s){
    return s.charAt(0).toUpperCase() + s.substr(1).toLowerCase();
    });
  return str;
}
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT", "");
```