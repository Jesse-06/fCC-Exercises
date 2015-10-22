#Waypoint: Manipulate Arrays With pop
<a href="http://freecodecamp.com/challenges/Waypoint:%20Manipulate%20Arrays%20With%20pop?solution=%2F%2F%20var%20numbers%20%3D%20%5B1%2C2%2C3%5D%3B%0A%2F%2F%20console.log(numbers)%3B%20%2F%2F%20logs%20%5B1%2C2%2C3%5D%0A%2F%2F%20var%20removed%20%3D%20numbers.pop()%3B%0A%2F%2F%20console.log(numbers)%3B%20%2F%2F%20logs%20%5B1%2C2%5D%0A%2F%2F%20console.log(removed)%3B%20%2F%2F%20logs%203%0A%0Avar%20myArray%20%3D%20%5B%22John%22%2C%2023%2C%20%5B%22cat%22%2C%202%5D%5D%3B%0A%2F%2F%20Only%20change%20code%20below%20this%20line.%0A%0Avar%20removed%20%3D%20myArray.pop()%3B%20%2F%2F%20This%20should%20be%20%5B%22cat%22%2C%202%5D%20and%20myArray%20should%20now%20be%20%5B%22John%22%2C%2023%5D%0A%0A%2F%2F%20Only%20change%20code%20above%20this%20line.%0A%2F%2F%20We%20use%20this%20function%20to%20show%20you%20the%20value%20of%20your%20variable%20in%20your%20output%20box.%0A%2F%2F%20You%27ll%20learn%20about%20functions%20soon.%0A(function(y%2C%20z)%7Breturn%20%27myArray%20%3D%20%27%20%2B%20JSON.stringify(y)%20%2B%20%27%20%26%20removed%20%3D%20%27%20%2B%20JSON.stringify(z)%3B%7D)(myArray%2C%20removed)%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Another way to change the data in an array is with the <code>.pop()</code> function.</p><p class="wrappable negative-10"><code>.pop()</code>is used to &quot;pop&quot; a value off of the end of an array. We can retrieve this value by performing <code>pop()</code> in a variable declaration.</p><p class="wrappable negative-10">Any type of variable can be &quot;popped&quot; off of an array.</p><p class="wrappable negative-10">Use the <code>.pop()</code> function to remove the last item from <code>myArray</code>.</p><div class="negative-bottom-margin-30"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p></div></div>


####Answer:
```javascript
// var numbers = [1,2,3];
// console.log(numbers); // logs [1,2,3]
// var removed = numbers.pop();
// console.log(numbers); // logs [1,2]
// console.log(removed); // logs 3

var myArray = ["John", 23, ["cat", 2]];
// Only change code below this line.

var removed = myArray.pop(); // This should be ["cat", 2] and myArray should now be ["John", 23]

// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
(function(y, z){return 'myArray = ' + JSON.stringify(y) + ' & removed = ' + JSON.stringify(z);})(myArray, removed);

```