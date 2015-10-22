#Waypoint: Nest one Array within Another Array
<a href="http://freecodecamp.com/challenges/Waypoint:%20Nest%20one%20Array%20within%20Another%20Array?solution=var%20ourArray%20%3D%20%5B%5B%22the%20universe%22%2C%20%22everything%22%2C%2042%5D%5D%3B%0A%2F%2F%20Only%20change%20code%20below%20this%20line.%0A%0Avar%20myArray%20%3D%20%5B%5B%22hello%22%2C%2042%5D%5D%3B%0A%0A%2F%2F%20Only%20change%20code%20above%20this%20line.%0A%2F%2F%20We%20use%20this%20function%20to%20show%20you%20the%20value%20of%20your%20variable%20in%20your%20output%20box.%0A%2F%2F%20You%27ll%20learn%20about%20functions%20soon.%0Aif(typeof(myArray)%20!%3D%3D%20%22undefined%22)%7B(function()%7Breturn%20myArray%3B%7D)()%3B%7D%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">You can also nest arrays within other arrays, like this: <code>[[&quot;Bulls&quot;, 23]]</code>.</p><p class="wrappable negative-10">Let&apos;s now go create a nested array called <code>myArray</code>.</p><div class="negative-bottom-margin-30"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p></div></div>


####Answer:
```javascript
var ourArray = [["the universe", "everything", 42]];
// Only change code below this line.

var myArray = [["hello", 42]];

// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
if(typeof(myArray) !== "undefined"){(function(){return myArray;})();}

```