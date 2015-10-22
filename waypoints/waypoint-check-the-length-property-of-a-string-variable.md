#Waypoint: Check the Length Property of a String Variable
<a href="http://freecodecamp.com/challenges/Waypoint:%20Check%20the%20Length%20Property%20of%20a%20String%20Variable?solution=var%20firstNameLength%20%3D%200%3B%0Avar%20lastNameLength%20%3D%200%3B%0Avar%20firstName%20%3D%20%22Ada%22%3B%0A%0AfirstNameLength%20%3D%20firstName.length%3B%0A%0Avar%20lastName%20%3D%20%22Lovelace%22%3B%0A%0A%2F%2F%20Only%20change%20code%20below%20this%20line.%0A%0AlastNameLength%20%3D%20lastName.length%3B%0A%0A%0A%0A%2F%2F%20Only%20change%20code%20above%20this%20line.%0A%2F%2F%20We%20use%20this%20function%20to%20show%20you%20the%20value%20of%20your%20variable%20in%20your%20output%20box.%0A%2F%2F%20You%27ll%20learn%20about%20functions%20soon.%0Aif(typeof(lastNameLength)%20!%3D%3D%20%22undefined%22)%7B(function()%7Breturn%20lastNameLength%3B%7D)()%3B%7D%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10"><code>Data structures</code> have <code>properties</code>. For example, <code>strings</code> have a property called <code>.length</code> that will tell you how many characters are in the string.</p><p class="wrappable negative-10">For example, if we created a variable <code>var firstName = &quot;Charles&quot;</code>, we could find out how long the string &quot;Charles&quot; is by using the <code>firstName.length</code> property.</p><p class="wrappable negative-10">Use the <code>.length</code> property to count the number of characters in the <code>lastName</code> variable.</p><div class="negative-bottom-margin-30"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p></div></div>


####Answer:
```javascript
var firstNameLength = 0;
var lastNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

var lastName = "Lovelace";

// Only change code below this line.

lastNameLength = lastName.length;



// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
if(typeof(lastNameLength) !== "undefined"){(function(){return lastNameLength;})();}

```