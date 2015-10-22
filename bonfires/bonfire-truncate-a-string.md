#Bonfire: Truncate a string
<a href="http://freecodecamp.com/challenges/Bonfire:%20Truncate%20a%20string?solution=function%20truncate(str%2C%20num)%20%7B%0A%20%20var%20validNumber%20%3D%20%2F%5E%5Cd%2B%24%2F.test(num)%3B%0A%20%20if(validNumber%20%3D%3D%3D%20false%20%7C%7C%20str.length%20%3C%3D%20num)%20%7B%0A%20%20%20%20return%20str%3B%0A%20%20%7D%20else%20%7B%0A%20%20%20%20str%20%3D%20str.slice(0%2C%20num%20-%203)%20%2B%20%22...%22%3B%0A%20%20%20%20return%20str%3B%0A%20%20%7D%3B%0A%7D%3B%0Atruncate(%22A-tisket%20a-tasket%20A%20green%20and%20yellow%20basket%22%2C%2011%2C%20%22%22)%3B" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a &quot;...&quot; ending.</p><p class="wrappable negative-10">Note that the three dots at the end add to the string length.</p><p class="wrappable negative-10">If the length of the string is less than or equal to 3 characters, then the length of the three dots is not added to the string length.</p><p class="wrappable negative-10">Remember to use <a href="//github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck" target="_blank">Read-Search-Ask</a> if you get stuck. Write your own code.</p><div class="negative-30-bottom"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice" target="_blank">String.slice()</a></li></ul></div></div></div>


####Answer:
```javascript
function truncate(str, num) {
  var validNumber = /^\d+$/.test(num);
  if(validNumber === false || str.length <= num) {
    return str;
  } else {
    str = str.slice(0, num - 3) + "...";
    return str;
  };
};
truncate("A-tisket a-tasket A green and yellow basket", 11, "");
```