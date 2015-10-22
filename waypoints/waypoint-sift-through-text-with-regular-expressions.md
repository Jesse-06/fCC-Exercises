#Waypoint: Sift through Text with Regular Expressions
<a href="http://freecodecamp.com/challenges/Waypoint:%20Sift%20through%20Text%20with%20Regular%20Expressions?solution=var%20test%20%3D%20(function()%20%7B%0A%20%20var%20testString%20%3D%20%22Ada%20Lovelace%20and%20Charles%20Babbage%20designed%20the%20first%20computer%20and%20the%20software%20that%20would%20have%20run%20on%20it.%22%3B%0A%20%20var%20expressionToGetSoftware%20%3D%20%2Fsoftware%2Fgi%3B%0A%20%20%2F%2F%20Only%20change%20code%20below%20this%20line.%0A%0A%20%20var%20expression%20%3D%20%2Fand%2Fgi%3B%0A%0A%20%20%2F%2F%20Only%20change%20code%20above%20this%20line.%0A%20%20%2F%2F%20We%20use%20this%20function%20to%20show%20you%20the%20value%20of%20your%20variable%20in%20your%20output%20box.%0A%20%20return%20testString.match(expression).length%3B%0A%7D)()%3B(function()%7Breturn%20test%3B%7D)()%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10"><code>Regular expressions</code> are used to find certain words or patterns inside of <code>strings</code>.</p><p class="wrappable negative-10">For example, if we wanted to find the word <code>the</code> in the string <code>The dog chased the cat</code>, we could use the following <code>regular expression</code>: <code>/the/gi</code></p><p class="wrappable negative-10">Let&apos;s break this down a bit:</p><p class="wrappable negative-10"><code>the</code> is the pattern we want to match.</p><p class="wrappable negative-10"><code>g</code> means that we want to search the entire string for this pattern instead of just the first match.</p><p class="wrappable negative-10"><code>i</code> means that we want to ignore the case (uppercase or lowercase) when searching for the pattern.</p><p class="wrappable negative-10"><code>Regular expressions</code> are written by surrounding the pattern with <code>/</code> symbols.</p><p class="wrappable negative-10">Let&apos;s try selecting all the occurrences of the word <code>and</code> in the string <code>Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it</code>. We can do this by replacing the <code>.</code> part of our regular expression with the current <code>regular expression</code> with the word <code>and</code>.</p><div class="negative-bottom-margin-30"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p></div></div>


####Answer:
```javascript
var test = (function() {
  var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";
  var expressionToGetSoftware = /software/gi;
  // Only change code below this line.

  var expression = /and/gi;

  // Only change code above this line.
  // We use this function to show you the value of your variable in your output box.
  return testString.match(expression).length;
})();(function(){return test;})();

```