#Waypoint: Use Bracket Notation to Find the Nth Character in a String
<a href="http://freecodecamp.com/challenges/Waypoint:%20Use%20Bracket%20Notation%20to%20Find%20the%20Nth%20Character%20in%20a%20String?solution=var%20firstName%20%3D%20%22Ada%22%3B%0A%0Avar%20secondLetterOfFirstName%20%3D%20firstName%5B1%5D%3B%0A%0Avar%20lastName%20%3D%20%22Lovelace%22%3B%0A%0Avar%20thirdLetterOfLastName%20%3D%20lastName%5B2%5D%3B%0A%0A%0A%2F%2F%20Only%20change%20code%20above%20this%20line.%0A%2F%2F%20We%20use%20this%20function%20to%20show%20you%20the%20value%20of%20your%20variable%20in%20your%20output%20box.%0A%2F%2F%20You%27ll%20learn%20about%20functions%20soon.%0A(function(v)%7Breturn%20v%3B%7D)(thirdLetterOfLastName)%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">You can also use <code>bracket Notation</code>to get the character at other positions within a string.</p><p class="wrappable negative-10">Remember that computers start counting at 0, so the first character is actually the zeroth character.</p><p class="wrappable negative-10">Let&apos;s try to set <code>thirdLetterOfLastName</code>to equal the <code>third letter</code> of the <code>lastName</code> variable.</p><p class="wrappable negative-10">Try looking at the <code>secondLetterOfFirstName</code> variable declaration if you get stuck.</p><div class="negative-bottom-margin-30"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p></div></div>


####Answer:
```javascript
var firstName = "Ada";

var secondLetterOfFirstName = firstName[1];

var lastName = "Lovelace";

var thirdLetterOfLastName = lastName[2];


// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
(function(v){return v;})(thirdLetterOfLastName);

```