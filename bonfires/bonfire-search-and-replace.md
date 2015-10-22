#Bonfire: Search and Replace
<a href="http://freecodecamp.com/challenges/Bonfire:%20Search%20and%20Replace?solution=function%20myReplace(str%2C%20before%2C%20after)%20%7B%0A%20%20%0A%20%20%2F%2Fif%20the%20first%20character%20is%20capitalized%2C%20replacement%20should%20be%20capitalized%0A%20%20%2F%2Felse%20just%20replace%20as%20usual.%0A%20%20if(before.charAt(0).match(%2F%5BA-Z%5D%2F))%20%7B%0A%20%20%20%20var%20str%20%3D%20str.replace(before%2C%20after.charAt(0).toUpperCase()%20%2B%20after.substr(1))%0A%20%20%7D%20else%20%7B%20%20%20%20%0A%20%20%20%20var%20str%20%3D%20str.replace(before%2C%20after)%3B%0A%20%20%7D%0A%20%20%0A%20%20return%20str%3B%0A%7D%0A%0AmyReplace(%22A%20quick%20brown%20fox%20jumped%20over%20the%20lazy%20dog%22%2C%20%22jumped%22%2C%20%22leaped%22)%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Perform a search and replace on the sentence using the arguments provided and return the new sentence.</p><p class="wrappable negative-10">First argument is the sentence to perform the search and replace on.</p><p class="wrappable negative-10">Second argument is the word that you will be replacing (before).</p><p class="wrappable negative-10">Third argument is what you will be replacing the second argument with (after).</p><p class="wrappable negative-10">NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word &quot;Book&quot; with the word &quot;dog&quot;, it should be replaced as &quot;Dog&quot;</p><p class="wrappable negative-10">Remember to use <a href="//github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck" target="_blank">Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.</p><div class="negative-30-bottom"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice" target="_blank">Array.splice()</a></li></ul></div><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace" target="_blank">String.replace()</a></li></ul></div><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join" target="_blank">Array.join()</a></li></ul></div></div></div>


####Answer:
```javascript
function myReplace(str, before, after) {
  
  //if the first character is capitalized, replacement should be capitalized
  //else just replace as usual.
  if(before.charAt(0).match(/[A-Z]/)) {
    var str = str.replace(before, after.charAt(0).toUpperCase() + after.substr(1))
  } else {    
    var str = str.replace(before, after);
  }
  
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

```