#Bonfire: Binary Agents
<a href="http://freecodecamp.com/challenges/Bonfire:%20Binary%20Agents?solution=function%20binaryAgent(str)%20%7B%0A%20%20%0A%20%20var%20str%20%3D%20str.split(%27%20%27)%3B%0A%20%20var%20sentence%20%3D%20%22%22%0A%20%20%0A%20%20%2F%2Fconvert%20binary%20to%20decimal%2C%20consider%20decimals%20as%20CharCodes%20and%20build%20the%20sentence%0A%20%20for(var%20i%20%3D%200%3B%20i%20%3C%20str.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20str%5Bi%5D%20%3D%20parseInt(str%5Bi%5D%2C%202)%0A%20%20%20%20sentence%20%2B%3D%20String.fromCharCode(str%5Bi%5D)%0A%20%20%7D%0A%20%20%0A%20%20return%20sentence%3B%0A%7D%0A%0AbinaryAgent(%2201000001%2001110010%2001100101%2001101110%2000100111%2001110100%2000100000%2001100010%2001101111%2001101110%2001100110%2001101001%2001110010%2001100101%2001110011%2000100000%2001100110%2001110101%2001101110%2000100001%2000111111%22)%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Return an English translated sentence of the passed binary string.</p><p class="wrappable negative-10">The binary string will be space separated.</p><p class="wrappable negative-10">Remember to use <a href="//github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck" target="_blank">Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.</p><div class="negative-30-bottom"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt" target="_blank">String.charCodeAt()</a></li></ul></div><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode" target="_blank">String.fromCharCode()</a></li></ul></div></div></div>


####Answer:
```javascript
function binaryAgent(str) {
  
  var str = str.split(' ');
  var sentence = ""
  
  //convert binary to decimal, consider decimals as CharCodes and build the sentence
  for(var i = 0; i < str.length; i++) {
    str[i] = parseInt(str[i], 2)
    sentence += String.fromCharCode(str[i])
  }
  
  return sentence;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

```