#Waypoint: Use Bracket Notation to Find the Last Character in a String
<a href="http://freecodecamp.com/challenges/Waypoint:%20Use%20Bracket%20Notation%20to%20Find%20the%20Last%20Character%20in%20a%20String?solution=var%20firstName%20%3D%20%22Ada%22%3B%0A%0Avar%20lastLetterOfFirstName%20%3D%20firstName%5BfirstName.length%20-%201%5D%3B%0A%0Avar%20lastName%20%3D%20%22Lovelace%22%3B%0A%0Avar%20lastLetterOfLastName%20%3D%20lastName%5BlastName.length%20-%201%5D%3B%0A%0A%0A%2F%2F%20Only%20change%20code%20above%20this%20line.%0A%2F%2F%20We%20use%20this%20function%20to%20show%20you%20the%20value%20of%20your%20variable%20in%20your%20output%20box.%0A%2F%2F%20You%27ll%20learn%20about%20functions%20soon.%0A(function(v)%7Breturn%20v%3B%7D)(lastLetterOfLastName)%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">In order to get the last letter of a string, you can subtract one from the string&apos;s length.</p><p class="wrappable negative-10">For example, if <code>var firstName = &quot;Charles&quot;</code>, you can get the value of the last letter of the string by using <code>firstName[firstName.length - 1]</code>.</p><p class="wrappable negative-10">Use <code>bracket notation</code> to find the last character in the <code>lastName</code> variable.</p><p class="wrappable negative-10">Try looking at the <code>lastLetterOfFirstName</code> variable declaration if you get stuck.</p><div class="negative-bottom-margin-30"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p></div></div>


####Answer:
```javascript
var firstName = "Ada";

var lastLetterOfFirstName = firstName[firstName.length - 1];

var lastName = "Lovelace";

var lastLetterOfLastName = lastName[lastName.length - 1];


// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
(function(v){return v;})(lastLetterOfLastName);

```