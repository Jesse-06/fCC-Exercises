#Bonfire: Find the Longest Word in a String
<a href="http://freecodecamp.com/challenges/Bonfire:%20Find%20the%20Longest%20Word%20in%20a%20String?solution=%2F*%0AReturn%20the%20length%20of%20the%20longest%20word%20in%20the%20provided%20sentence.%0AYour%20response%20should%20be%20a%20number.%0A*%2F%0A%0A%2F%2F%20split%20the%20string%20into%20an%20array%20and%20sort%20descending%20by%20length%20of%20each%20word%0Afunction%20findLongestWord(str)%20%7B%0A%20%20str%20%3D%20str.split(%22%20%22).sort(function(a%2C%20b)%20%7B%0A%20%20%20%20return%20b.length%20-%20a.length%3B%0A%20%20%7D)%3B%0A%20%20%0A%2F%2F%20return%20the%20length%20of%20the%20first%20word%20in%20the%20array%0A%20%20return%20str%5B0%5D.length%3B%0A%7D%0A%0AfindLongestWord(%22The%20quick%20brown%20fox%20jumped%20over%20the%20lazy%20dog%22)%3B" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Return the length of the longest word in the provided sentence.</p><p class="wrappable negative-10">Your response should be a number.</p><p class="wrappable negative-10">Remember to use <a href="//github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck" target="_blank">Read-Search-Ask</a> if you get stuck. Write your own code.</p><div class="negative-30-bottom"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split" target="_blank">String.split()</a></li></ul></div><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length" target="_blank">String.length</a></li></ul></div></div></div>


####Answer:
```javascript
/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

// split the string into an array and sort descending by length of each word
function findLongestWord(str) {
  str = str.split(" ").sort(function(a, b) {
    return b.length - a.length;
  });
  
// return the length of the first word in the array
  return str[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
```