#Waypoint: Use Bracket Notation to Find the First Character in a String
<a href="http://freecodecamp.com/challenges/Waypoint:%20Use%20Bracket%20Notation%20to%20Find%20the%20First%20Character%20in%20a%20String?solution=var%20firstLetterOfFirstName%20%3D%20%22%22%3B%0Avar%20firstLetterOfLastName%20%3D%20%22%22%3B%0A%0Avar%20firstName%20%3D%20%22Ada%22%3B%0A%0AfirstLetterOfFirstName%20%3D%20firstName%5B0%5D%3B%0A%0Avar%20lastName%20%3D%20%22Lovelace%22%3B%0A%0AfirstLetterOfLastName%20%3D%20lastName%5B0%5D%3B%0A%0A%0A%2F%2F%20Only%20change%20code%20above%20this%20line.%0A%2F%2F%20We%20use%20this%20function%20to%20show%20you%20the%20value%20of%20your%20variable%20in%20your%20output%20box.%0A%2F%2F%20You%27ll%20learn%20about%20functions%20soon.%0A(function(v)%7Breturn%20v%3B%7D)(firstLetterOfLastName)%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10"><code>Bracket notation</code> is a way to get a character at a specific <code>index</code> within a string.</p><p class="wrappable negative-10">Computers don&apos;t start counting at 1 like humans do. They start at 0.</p><p class="wrappable negative-10">For example, the character at index 0 in the word &quot;Charles&quot; is &quot;C&quot;. So if <code>var firstName = &quot;Charles&quot;</code>, you can get the value of the first letter of the string by using <code>firstName[0]</code>.</p><p class="wrappable negative-10">Use <code>bracket notation</code> to find the first character in the <code>firstLetterOfLastName</code> variable.</p><p class="wrappable negative-10">Try looking at the <code>firstLetterOfFirstName</code> variable declaration if you get stuck.</p><div class="negative-bottom-margin-30"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p></div></div>


####Answer:
```javascript
var firstLetterOfFirstName = "";
var firstLetterOfLastName = "";

var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

var lastName = "Lovelace";

firstLetterOfLastName = lastName[0];


// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
(function(v){return v;})(firstLetterOfLastName);

```