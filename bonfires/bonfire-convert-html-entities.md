#Bonfire: Convert HTML Entities
<a href="http://freecodecamp.com/challenges/bonfire-convert-html-entities#?solution=function%20convert(str)%20%7B%0A%20%20return%20String(str).replace(%2F%26%2Fg%2C%20%27%26amp%3B%27)%0A%20%20.replace(%2F%3C%2Fg%2C%20%27%26lt%3B%27)%0A%20%20.replace(%2F%3E%2Fg%2C%20%27%26gt%3B%27)%0A%20%20.replace(%2F%22%2Fg%2C%20%27%26quot%3B%27)%0A%20%20.replace(%2F%27%2Fg%2C%20%27%26apos%3B%27)%3B%0A%7D%0A%0Aconvert(%22Dolce%20%26%20Gabbana%22)%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Convert the characters &quot;&amp;&quot;, &quot;<", "="">&quot;, &apos;&quot;&apos; (double quote), and &quot;&apos;&quot; (apostrophe), in a string to their corresponding HTML entities.</",></p><p class="wrappable negative-10">Remember to use <a href="//github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck" target="_blank">Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.</p><div class="negative-30-bottom"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp" target="_blank">RegExp</a></li></ul></div><div class="negative-10"><ul><li><a href="http://dev.w3.org/html5/html-author/charref" target="_blank">HTML Entities</a></li></ul></div></div></div>


####Answer:
```javascript
function convert(str) {
  return String(str).replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&apos;');
}

convert("Dolce & Gabbana");

```