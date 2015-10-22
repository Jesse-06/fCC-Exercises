#Waypoint: Declare JavaScript Variables
<a href="http://freecodecamp.com/challenges/Waypoint:%20Declare%20JavaScript%20Variables?solution=%2F%2F%20var%20ourName%20%3D%20%22Free%20Code%20Camp%22%3B%0A%0A%0A%2F%2F%20Only%20change%20code%20above%20this%20line.%0A%2F%2F%20We%20use%20this%20function%20to%20show%20you%20the%20value%20of%20your%20variable%20in%20your%20output%20box.%0A%2F%2F%20You%27ll%20learn%20about%20functions%20soon.%0Avar%20myName%20%3D%20%22Tyler%22%0Aif(typeof(myName)%20!%3D%3D%20%22undefined%22)%7B(function(v)%7Breturn%20v%3B%7D)(myName)%3B%7D%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">When we store data in a <code>data structure</code>, we call it a <code>variable</code>. These variables are no different from the x and y variables you use in math.</p><p class="wrappable negative-10">Let&apos;s create our first variable and call it &quot;myName&quot;.</p><p class="wrappable negative-10">You&apos;ll notice that in <code>myName</code>, we didn&apos;t use a space, and that the &quot;N&quot; is capitalized. JavaScript variables are written in <code>camel case</code>. An example of camel case is: camelCase.</p><p class="wrappable negative-10">Now, use the <code>var</code> keyword to create a variable called <code>myName</code>. Set its value to your name, in double quotes.</p><p class="wrappable negative-10">Look at the <code>ourName</code> example if you get stuck.</p><div class="negative-bottom-margin-30"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p></div></div>


####Answer:
```javascript
// var ourName = "Free Code Camp";


// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
var myName = "Tyler"
if(typeof(myName) !== "undefined"){(function(v){return v;})(myName);}

```