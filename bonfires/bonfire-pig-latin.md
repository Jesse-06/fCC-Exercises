#Bonfire: Pig Latin
<a href="http://freecodecamp.com/challenges/Bonfire:%20Pig%20Latin?solution=function%20translate(str)%20%7B%0A%0A%20%20var%20vowels%20%3D%20%5B%22a%22%2C%20%22e%22%2C%20%22i%22%2C%20%22o%22%2C%20%22u%22%5D%0A%20%20%0A%20%20%2F%2FFor%20words%20that%20begin%20with%20vowels%2C%20add%20%22way%22%20to%20the%20end.%0A%20%20if%20(vowels.indexOf(str.toLowerCase().charAt(0))%20%3E%20-1)%20%7B%0A%20%20%20%20return%20str%20%2B%20%22way%22%3B%0A%20%20%7D%0A%0A%20%20%2F*%0A%20%20*%20%20For%20words%20that%20don%27t%20begin%20with%20vowels%2C%20take%20all%20consonants%20%0A%20%20*%20%20before%20the%20vowel%2C%20move%20to%20the%20end%2C%20and%20then%20add%20%22ay%22%0A%20%20*%2F%0A%20%20for%20(i%3D0%3B%20i%3Cstr.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20if%20(vowels.indexOf(str.toLowerCase().charAt(i))%20%3E%20-1)%20%7B%0A%20%20%20%20%20%20return%20str.substring(i)%20%2B%20str.substring(0%2Ci)%20%2B%20%22ay%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Atranslate(%22consonant%22)%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Translate the provided string to pig latin.</p><p class="wrappable negative-10"><a href="http://en.wikipedia.org/wiki/Pig_Latin" target="_blank">Pig Latin</a> takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an &quot;ay&quot;.</p><p class="wrappable negative-10">If a word begins with a vowel you just add &quot;way&quot; to the end.</p><p class="wrappable negative-10">Remember to use <a href="//github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck" target="_blank">Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.</p><div class="negative-30-bottom"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf" target="_blank">Array.indexOf()</a></li></ul></div><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push" target="_blank">Array.push()</a></li></ul></div><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join" target="_blank">Array.join()</a></li></ul></div><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr" target="_blank">String.substr()</a></li></ul></div><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split" target="_blank">String.split()</a></li></ul></div></div></div>


####Answer:
```javascript
function translate(str) {

  var vowels = ["a", "e", "i", "o", "u"]
  
  //For words that begin with vowels, add "way" to the end.
  if (vowels.indexOf(str.toLowerCase().charAt(0)) > -1) {
    return str + "way";
  }

  /*
  *  For words that don't begin with vowels, take all consonants 
  *  before the vowel, move to the end, and then add "ay"
  */
  for (i=0; i<str.length; i++) {
    if (vowels.indexOf(str.toLowerCase().charAt(i)) > -1) {
      return str.substring(i) + str.substring(0,i) + "ay"
    }
  }
}

translate("consonant");

```