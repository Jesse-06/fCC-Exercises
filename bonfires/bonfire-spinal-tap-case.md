#Bonfire: Spinal Tap Case
<a href="http://freecodecamp.com/challenges/Bonfire:%20Spinal%20Tap%20Case?solution=function%20spinalCase(str)%20%7B%0A%20%20%0A%20%20%2F%2Fmake%20first%20letter%20lower%20case%20to%20avoid%20prepending%20string%20with%20a%20dash%0A%20%20str%20%3D%20str.charAt(0).toLowerCase()%20%2B%20str.substr(1)%0A%20%20%0A%20%20%2F%2Ffind%20capital%20letters%0A%20%20var%20caps%20%3D%20(str.match(%2F%5BA-Z%5D%2Fg))%3B%0A%20%20%0A%20%20%2F%2Fput%20a%20dash%20in%20front%20of%20each%20capital%20letter%20and%20then%20make%20it%20lower%20case%20in%20case%20of%20duplicate%20capital%20letters%0A%20%20for%20(var%20i%20%3D%200%3B%20i%20%3C%20caps.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20var%20str%20%3D%20str.replace(caps%5Bi%5D%2C%20%22-%22%20%2B%20caps%5Bi%5D.toLowerCase())%0A%20%20%7D%0A%0A%20%20%2F%2F%20replace%20spaces%20and%20underscores%20with%20a%20dash%2C%20remove%20double%20dashes%2C%20and%20then%20make%20all%20lowercase.%0A%20%20var%20str%20%3D%20str.replace(%2F%5Cs%7C_%2Fg%2C%20%22-%22%20)%0A%20%20var%20str%20%3D%20str.replace(%2F--%2Fg%2C%20%22-%22%20)%0A%20%20var%20str%20%3D%20str.toLowerCase()%3B%0A%20%20return%20str%3B%0A%20%20%0A%7D%0A%0AspinalCase(%27Teletubbies%20say%20Eh-oh%27)%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.</p><p class="wrappable negative-10">Remember to use <a href="//github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck" target="_blank">Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.</p><div class="negative-30-bottom"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp" target="_blank">RegExp</a></li></ul></div><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace" target="_blank">String.replace()</a></li></ul></div></div></div>


####Answer:
```javascript
function spinalCase(str) {
  
  //make first letter lower case to avoid prepending string with a dash
  str = str.charAt(0).toLowerCase() + str.substr(1)
  
  //find capital letters
  var caps = (str.match(/[A-Z]/g));
  
  //put a dash in front of each capital letter and then make it lower case in case of duplicate capital letters
  for (var i = 0; i < caps.length; i++) {
    var str = str.replace(caps[i], "-" + caps[i].toLowerCase())
  }

  // replace spaces and underscores with a dash, remove double dashes, and then make all lowercase.
  var str = str.replace(/\s|_/g, "-" )
  var str = str.replace(/--/g, "-" )
  var str = str.toLowerCase();
  return str;
  
}

spinalCase('Teletubbies say Eh-oh');

```