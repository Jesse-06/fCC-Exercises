#Waypoint: Build JavaScript Objects
<a href="http://freecodecamp.com/challenges/Waypoint:%20Build%20JavaScript%20Objects?solution=%2F%2F%20var%20ourDog%20%3D%20%7B%0A%2F%2F%20%20%20%22name%22%3A%20%22Camper%22%2C%0A%2F%2F%20%20%20%22legs%22%3A%204%2C%0A%2F%2F%20%20%20%22tails%22%3A%201%2C%0A%2F%2F%20%20%20%22friends%22%3A%20%5B%22everything!%22%5D%0A%2F%2F%20%7D%3B%0A%0A%2F%2F%20Add%20the%20name%20(string)%2C%20legs%20(number)%2C%20tails%20(number)%20and%20friends%20(array)%20properties%20to%20myDog.%0A%2F%2F%20You%20can%20set%20them%20to%20whatever%20you%20want.%0A%0A%2F%2F%20Only%20change%20code%20below%20this%20line.%0A%0Avar%20myDog%20%3D%20%7B%20%22name%22%3A%20%22Spot%22%2C%20%22legs%22%3A%204%2C%20%22tails%22%3A%201%2C%20%22friends%22%3A%20%5B%22lucky%22%2C%20%22charlie%22%5D%20%7D%3B%0A%0A%2F%2F%20Only%20change%20code%20above%20this%20line.%0A%2F%2F%20We%20use%20this%20function%20to%20show%20you%20the%20value%20of%20your%20variable%20in%20your%20output%20box.%0A(function(z)%7Breturn%20z%3B%7D)(myDog)%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">You may have heard the term <code>object</code> before.</p><p class="wrappable negative-10">Objects are similar to <code>arrays</code>, except that instead of using indexes to access and modify their data, you access the data in objects through what are called <code>properties</code>.</p><p class="wrappable negative-10">Here&apos;s a sample object:</p><p class="wrappable negative-10"><code>var cat = {</code></p><p class="wrappable negative-10"><code>  &quot;name&quot;: &quot;Whiskers&quot;,</code></p><p class="wrappable negative-10"><code>  &quot;legs&quot;: 4,</code></p><p class="wrappable negative-10"><code>  &quot;tails&quot;: 1,</code></p><p class="wrappable negative-10"><code>  &quot;enemies&quot;: [&quot;Water&quot;, &quot;Dogs&quot;]</code></p><p class="wrappable negative-10"><code>};</code></p><p class="wrappable negative-10"></p><p class="wrappable negative-10">Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.</p><p class="wrappable negative-10">Let&apos;s try to make an object that represents a dog called <code>myDog</code> which contains the properties <code>&apos;name&apos;</code> (String), <code>&apos;legs&apos;</code> (Number), <code>&apos;tails&apos;</code> (Number) and <code>&apos;friends&apos;</code> (Array)!</p><div class="negative-bottom-margin-30"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p></div></div>


####Answer:
```javascript
// var ourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"]
// };

// Add the name (string), legs (number), tails (number) and friends (array) properties to myDog.
// You can set them to whatever you want.

// Only change code below this line.

var myDog = { "name": "Spot", "legs": 4, "tails": 1, "friends": ["lucky", "charlie"] };

// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
(function(z){return z;})(myDog);

```