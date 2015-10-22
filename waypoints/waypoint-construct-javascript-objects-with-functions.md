#Waypoint: Construct JavaScript Objects with Functions
<a href="http://freecodecamp.com/challenges/Waypoint:%20Construct%20JavaScript%20Objects%20with%20Functions?solution=%2F%2F%20Let%27s%20add%20the%20properties%20engines%20and%20seats%20to%20the%20car%20in%20the%20same%20way%20that%20the%20property%20wheels%20has%20been%20added%20below.%20They%20should%20both%20be%20numbers.%0Avar%20Car%20%3D%20function()%20%7B%0A%20%20this.wheels%20%3D%204%3B%0A%20%20this.engines%20%3D%201%3B%0A%20%20this.seats%20%3D%201%3B%0A%7D%3B%0A%0Avar%20myCar%20%3D%20new%20Car()%3B%0A%0A%2F%2F%20Only%20change%20code%20below%20this%20line.%0Avar%20MotorBike%20%3D%20function()%20%7B%0A%20%20this.wheels%20%3D%202%3B%0A%20%20this.engines%20%3D%201%3B%0A%20%20this.seats%20%3D%202%3B%0A%0A%0A%7D%3B%0A%0Avar%20myMotorBike%20%3D%20new%20MotorBike()%3B%0A%2F%2F%20Only%20change%20code%20above%20this%20line.%0A%0A(function()%20%7Breturn%20JSON.stringify(myMotorBike)%3B%7D)()%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">We are also able to create objects using <code>constructor</code> functions.</p><p class="wrappable negative-10">Give your <code>myMotorBike</code> object a <code>wheels</code>, <code>engines</code> and <code>seats</code> attribute and set them to numbers.</p><div class="negative-bottom-margin-30"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p></div></div>


####Answer:
```javascript
// Let's add the properties engines and seats to the car in the same way that the property wheels has been added below. They should both be numbers.
var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 1;
};

var myCar = new Car();

// Only change code below this line.
var MotorBike = function() {
  this.wheels = 2;
  this.engines = 1;
  this.seats = 2;


};

var myMotorBike = new MotorBike();
// Only change code above this line.

(function() {return JSON.stringify(myMotorBike);})();

```