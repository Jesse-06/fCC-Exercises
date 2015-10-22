#Waypoint: Manipulate Arrays With push
<a href="http://freecodecamp.com/challenges/Waypoint:%20Manipulate%20Arrays%20With%20push?solution=var%20ourArray%20%3D%20%5B%22Stimpson%22%2C%20%22J%22%2C%20%5B%22cat%22%5D%5D%3B%0AourArray.pop()%3B%0AourArray.push(%5B%22happy%22%2C%20%22joy%22%5D)%3B%0A%2F%2F%20ourArray%20now%20equals%20%5B%22Stimpson%22%2C%20%22J%22%2C%20%5B%22happy%22%2C%20%22joy%22%5D%5D.%0A%0Avar%20myArray%20%3D%20%5B%22John%22%2C%2023%2C%20%5B%22cat%22%2C%202%5D%5D%3B%0AmyArray.pop()%3B%0AmyArray.push(%5B%22dog%22%2C%203%5D)%3B%0A%2F%2F%20Add%20a%20%5B%22dog%22%2C%203%5D%20to%20the%20end%20of%20myArray%20using%20push().%0A%2F%2F%20Only%20change%20code%20below%20this%20line.%0A%0A%0A%2F%2F%20Only%20change%20code%20above%20this%20line.%0A%2F%2F%20We%20use%20this%20function%20to%20show%20you%20the%20value%20of%20your%20variable%20in%20your%20output%20box.%0A%2F%2F%20You%27ll%20learn%20about%20functions%20soon.%0A(function(z)%7Breturn%20%27myArray%20%3D%20%27%20%2B%20JSON.stringify(z)%3B%7D)(myArray)%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Not only can you <code>pop()</code> data off of the end of an array, you can also <code>push()</code> data onto the end of an array.</p><p class="wrappable negative-10">Take the <code>myArray</code> array and <code>push()</code> this value to the end of it: <code>[&quot;dog&quot;, 3]</code>.</p><div class="negative-bottom-margin-30"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p></div></div>


####Answer:
```javascript
var ourArray = ["Stimpson", "J", ["cat"]];
ourArray.pop();
ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", ["happy", "joy"]].

var myArray = ["John", 23, ["cat", 2]];
myArray.pop();
myArray.push(["dog", 3]);
// Add a ["dog", 3] to the end of myArray using push().
// Only change code below this line.


// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
(function(z){return 'myArray = ' + JSON.stringify(z);})(myArray);

```