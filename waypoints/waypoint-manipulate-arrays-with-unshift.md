#Waypoint: Manipulate Arrays With unshift
<a href="http://freecodecamp.com/challenges/Waypoint:%20Manipulate%20Arrays%20With%20unshift?solution=var%20ourArray%20%3D%20%5B%22Stimpson%22%2C%20%22J%22%2C%20%5B%22cat%22%5D%5D%3B%0AourArray.shift()%3B%0A%2F%2F%20ourArray%20now%20equals%20%5B%22happy%22%2C%20%22J%22%2C%20%5B%22cat%22%5D%5D%0AourArray.unshift(%22happy%22)%3B%0A%0Avar%20myArray%20%3D%20%5B%22John%22%2C%2023%2C%20%5B%22dog%22%2C%203%5D%5D%3B%0AmyArray.shift()%3B%0A%0A%2F%2F%20Add%20%22Paul%22%20to%20the%20start%20of%20myArray.%0A%2F%2F%20Only%20change%20code%20below%20this%20line.%0AmyArray.unshift(%22Paul%22)%3B%0A%0A%2F%2F%20Only%20change%20code%20above%20this%20line.%0A%2F%2F%20We%20use%20this%20function%20to%20show%20you%20the%20value%20of%20your%20variable%20in%20your%20output%20box.%0A%2F%2F%20You%27ll%20learn%20about%20functions%20soon.%0A(function(y%2C%20z)%7Breturn%20%27myArray%20%3D%20%27%20%2B%20JSON.stringify(y)%3B%7D)(myArray)%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Now that we&apos;ve learned how to <code>shift</code>things from the start of the array, we need to learn how to <code>unshift</code>stuff back to the start.</p><p class="wrappable negative-10">Let&apos;s take the code we had last time and <code>unshift</code>this value to the start: <code>&quot;Paul&quot;</code>.</p><div class="negative-bottom-margin-30"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p></div></div>


####Answer:
```javascript
var ourArray = ["Stimpson", "J", ["cat"]];
ourArray.shift();
// ourArray now equals ["happy", "J", ["cat"]]
ourArray.unshift("happy");

var myArray = ["John", 23, ["dog", 3]];
myArray.shift();

// Add "Paul" to the start of myArray.
// Only change code below this line.
myArray.unshift("Paul");

// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
(function(y, z){return 'myArray = ' + JSON.stringify(y);})(myArray);

```