#Waypoint: Make Object Properties Private
<a href="http://freecodecamp.com/challenges/Waypoint:%20Make%20Object%20Properties%20Private?solution=%2F%2FLet%27s%20create%20an%20object%20with%20a%20two%20functions.%20One%20attached%20as%20a%20property%20and%20one%20not.%0Avar%20Car%20%3D%20function()%20%7B%0A%20%20this.gear%20%3D%201%3B%0A%20%20function%20addStyle(styleMe)%7B%0A%20%20%20%20return%20%27The%20Current%20Gear%20Is%3A%20%27%20%2B%20styleMe%3B%0A%20%20%7D%0A%20%20this.getGear%20%3D%20function()%20%7B%0A%20%20%20%20return%20addStyle(this.gear)%3B%0A%20%20%7D%3B%0A%7D%3B%0A%0Avar%20Bike%20%3D%20function()%20%7B%0A%20%20%2F%2F%20Only%20change%20code%20below%20this%20line.%0A%20%20speed%20%3D%20100%3B%0A%20%20function%20addUnit(value)%20%7B%0A%20%20%20%20return%20value%20%2B%20%22KM%2FH%22%3B%0A%20%20%7D%0A%20%20%0A%20%20this.getSpeed%20%3D%20function%20()%20%7B%0A%20%20%20%20return%20addUnit(speed)%3B%0A%20%20%7D%3B%0A%20%20%0A%7D%3B%0A%0A%2F%2F%20Only%20change%20code%20above%20this%20line.%0Avar%20myCar%20%3D%20new%20Car()%3B%0Avar%20myBike%20%3D%20new%20Bike()%3B%0A%0Aif(myBike.hasOwnProperty(%27getSpeed%27))%7B(function()%20%7Breturn%20JSON.stringify(myBike.getSpeed())%3B%7D)()%3B%7D%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Objects have their own attributes, called <code>properties</code>, and their own functions, called <code>methods</code>.</p><p class="wrappable negative-10">In the previous challenge, we used the <code>this</code> keyword to reference <code>public properties</code> and <code>public methods</code> of the current object.</p><p class="wrappable negative-10">We can also create <code>private properties</code> and <code>private methods</code>, which aren&apos;t accessible from outside the object.</p><p class="wrappable negative-10">To do this, we omit the word <code>this</code> from the <code>property</code> or <code>method</code> declaration.</p><p class="wrappable negative-10">See if you can keep <code>myBike.speed</code> and <code>myBike.addUnit</code> private, while making <code>myBike.getSpeed</code> publicly accessible.</p><div class="negative-bottom-margin-30"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p></div></div>


####Answer:
```javascript
//Let's create an object with a two functions. One attached as a property and one not.
var Car = function() {
  this.gear = 1;
  function addStyle(styleMe){
    return 'The Current Gear Is: ' + styleMe;
  }
  this.getGear = function() {
    return addStyle(this.gear);
  };
};

var Bike = function() {
  // Only change code below this line.
  speed = 100;
  function addUnit(value) {
    return value + "KM/H";
  }
  
  this.getSpeed = function () {
    return addUnit(speed);
  };
  
};

// Only change code above this line.
var myCar = new Car();
var myBike = new Bike();

if(myBike.hasOwnProperty('getSpeed')){(function() {return JSON.stringify(myBike.getSpeed());})();};

```