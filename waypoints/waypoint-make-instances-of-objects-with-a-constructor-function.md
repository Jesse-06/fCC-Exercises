#Waypoint: Make Instances of Objects with a Constructor Function
<a href="http://freecodecamp.com/challenges/Waypoint:%20Make%20Instances%20of%20Objects%20with%20a%20Constructor%20Function?solution=var%20Car%20%3D%20function()%20%7B%0A%20%20%20this.wheels%20%3D%204%3B%0A%7D%3B%0A%0A%2F%2F%20Only%20change%20code%20below%20this%20line.%0Avar%20myCar%20%3D%20new%20Car()%3B%0A%2F%2FAdd%20the%20property%20%22engines%22%20to%20myCar%2C%20and%20make%20it%20a%20number.%0AmyCar.engines%20%3D%201%3B%0A%0A%2F%2F%20Only%20change%20code%20above%20this%20line.%0A(function()%20%7Breturn%20JSON.stringify(myCar)%3B%7D)()%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Sometimes you&apos;ll want to be able to easily create similar objects.</p><p class="wrappable negative-10">Objects have their own attributes, called <code>properties</code>, and their own functions, called <code>methods</code>.</p><p class="wrappable negative-10">A function that creates objects is called a <code>constructor</code>.</p><p class="wrappable negative-10">You can create <code>instances</code> of an object using a <code>constructor</code>.</p><p class="wrappable negative-10">Each new <code>instance</code> of this object <code>inherits</code> all the <code>properties</code> and <code>methods</code> of your original object.</p><p class="wrappable negative-10">Once an <code>instance</code> has been created you can add <code>properties</code> to that <code>instance</code> individually.</p><p class="wrappable negative-10">Add an <code>engines</code> property with a number value to the <code>myCar</code> instance.</p><div class="negative-bottom-margin-30"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p></div></div>


####Answer:
```javascript
var Car = function() {
   this.wheels = 4;
};

// Only change code below this line.
var myCar = new Car();
//Add the property "engines" to myCar, and make it a number.
myCar.engines = 1;

// Only change code above this line.
(function() {return JSON.stringify(myCar);})();

```