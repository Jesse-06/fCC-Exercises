#Bonfire: Confirm the Ending
<a href="http://freecodecamp.com/challenges/Bonfire:%20Confirm%20the%20Ending?solution=function%20end(str%2C%20target)%20%7B%0A%20%20if(str.slice(-1)%20%3D%3D%3D%20target.slice(-1))%7B%0A%20%20%20%20return%20true%3B%0A%20%20%7D%20else%20%7B%0A%20%20%20%20return%20false%3B%0A%20%20%7D%0A%7D%0Aend(%22Bastian%22%2C%20%22n%22%2C%20%22%22)%3B" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Check if a string (first argument) ends with the given target string (second argument).</p><p class="wrappable negative-10">Remember to use <a href="//github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck" target="_blank">Read-Search-Ask</a> if you get stuck. Write your own code.</p><div class="negative-30-bottom"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr" target="_blank">String.substr()</a></li></ul></div></div></div>


####Answer:
```javascript
function end(str, target) {
  if(str.slice(-1) === target.slice(-1)){
    return true;
  } else {
    return false;
  }
}
end("Bastian", "n", "");
```