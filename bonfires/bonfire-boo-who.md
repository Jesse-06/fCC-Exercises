#Bonfire: Boo who
<a href="http://freecodecamp.com/challenges/Bonfire:%20Boo%20who?solution=function%20boo(bool)%20%7B%0Aif(typeof%20bool%20%3D%3D%3D%20%22boolean%22)%20%7B%0A%20%20return%20true%3B%0A%7D%0Areturn%20false%3B%0A%7D%0Aboo(false)%3B" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Check if a value is classified as a boolean primitive. Return true or false.</p><p class="wrappable negative-10">Boolean primitives are true and false.</p><p class="wrappable negative-10">Remember to use <a href="//github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck" target="_blank">Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.</p><div class="negative-30-bottom"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean" target="_blank">Boolean Objects</a></li></ul></div></div></div>


####Answer:
```javascript
function boo(bool) {
if(typeof bool === "boolean") {
  return true;
}
return false;
}
boo(false);
```