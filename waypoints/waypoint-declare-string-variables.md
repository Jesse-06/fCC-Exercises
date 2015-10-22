#Waypoint: Declare String Variables
<a href="http://freecodecamp.com/challenges/Waypoint:%20Declare%20String%20Variables?solution=%2F%2F%20var%20name%20%3D%20%22Alan%20Turing%22%3B%0A%2F%2F%20var%20firstName%20%3D%20%22Alan%22%3B%0A%2F%2F%20var%20lastName%20%3D%20%22Turing%22%3B%0Avar%20myFirstName%20%3D%20%22Tyler%22%0Avar%20myLastName%20%3D%20%22Moeller%22%0A%2F%2F%20Only%20change%20code%20above%20this%20line.%0A%2F%2F%20We%20use%20this%20function%20to%20show%20you%20the%20value%20of%20your%20variable%20in%20your%20output%20box.%0A%2F%2F%20You%27ll%20learn%20about%20functions%20soon.%0Aif(typeof(myFirstName)%20!%3D%3D%20%22undefined%22%20%26%26%20typeof(myLastName)%20!%3D%3D%20%22undefined%22)%7B(function()%7Breturn%20myFirstName%20%2B%20%27%2C%20%27%20%2B%20myLastName%3B%7D)()%3B%7D%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">In the previous challenge, we used the code <code>var myName = &quot;your name&quot;</code>. This is what we call a <code>String</code> variable. It is nothing more than a &quot;string&quot; of characters. JavaScript strings are always wrapped in quotes.</p><p class="wrappable negative-10">Now let&apos;s create two new string variables: <code>myFirstName</code>and <code>myLastName</code> and assign them the values of your first and last name, respectively.</p><div class="negative-bottom-margin-30"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p></div></div>


####Answer:
```javascript
// var name = "Alan Turing";
// var firstName = "Alan";
// var lastName = "Turing";
var myFirstName = "Tyler"
var myLastName = "Moeller"
// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
if(typeof(myFirstName) !== "undefined" && typeof(myLastName) !== "undefined"){(function(){return myFirstName + ', ' + myLastName;})();}

```