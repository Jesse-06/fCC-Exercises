#Waypoint: Declare JavaScript Objects as Variables
<a href="http://freecodecamp.com/challenges/Waypoint:%20Declare%20JavaScript%20Objects%20as%20Variables?solution=%2F%2FHere%20is%20a%20sample%20Object%0Avar%20car%20%3D%20%7B%0A%20%20%22wheels%22%3A4%2C%0A%20%20%22engines%22%3A1%2C%0A%20%20%22seats%22%3A5%0A%7D%3B%0A%0A%2F%2FNow%20Let%27s%20make%20a%20similar%20Object%20called%20motorBike%0A%2F%2FGive%20it%20two%20wheels%2C%20one%20engine%20and%20one%20seat%0Avar%20motorBike%20%3D%20%7B%0A%20%20%2F%2F%20Only%20change%20code%20below%20this%20line.%0A%20%20%22wheels%22%3A4%2C%0A%20%20%22engines%22%3A1%2C%0A%20%20%22seats%22%3A2%0A%0A%0A%20%20%2F%2F%20Only%20change%20code%20above%20this%20line.%0A%7D%3B%0A%0A(function()%20%7Breturn%20JSON.stringify(motorBike)%3B%7D)()%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Before we dive into Object Oriented Programming, let&apos;s revisit JavaScript objects.</p><p class="wrappable negative-10">Give your <code>motorBike</code> object a <code>wheels</code>, <code>engines</code> and <code>seats</code> attribute and set them to numbers.</p><div class="negative-bottom-margin-30"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p></div></div>


####Answer:
```javascript
//Here is a sample Object
var car = {
  "wheels":4,
  "engines":1,
  "seats":5
};

//Now Let's make a similar Object called motorBike
//Give it two wheels, one engine and one seat
var motorBike = {
  // Only change code below this line.
  "wheels":4,
  "engines":1,
  "seats":2


  // Only change code above this line.
};

(function() {return JSON.stringify(motorBike);})();

```