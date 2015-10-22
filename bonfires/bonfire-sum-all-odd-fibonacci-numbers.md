#Bonfire: Sum All Odd Fibonacci Numbers
<a href="http://freecodecamp.com/challenges/Bonfire:%20Sum%20All%20Odd%20Fibonacci%20Numbers?solution=function%20sumFibs(num)%20%7B%0A%20%20%2F%2FNot%20calculating%20negative%20fibonacci%20numbers%0A%20%20if(num%20%3C%201)%20%7Breturn%20num%3B%7D%0A%20%20%0A%20%20var%20previous%20%3D%200%3B%0A%20%20var%20current%20%3D%201%3B%0A%20%20var%20fibSum%20%3D%20previous%20%2B%20current%3B%0A%20%20var%20oddFibArr%20%3D%20%5B%5D%0A%0A%20%20%2F%2F%20Generate%20Fibonacci%20sequence%20and%20add%20odd%20values%20to%20an%20array%0A%20%20while(fibSum%20%3C%3D%20num)%20%7B%0A%20%20%20%20if%20(fibSum%20%25%202%20%3D%3D%3D%201)%20%7BoddFibArr.push(fibSum)%3B%7D%0A%20%20%20%20var%20fibSum%20%3D%20previous%20%2B%20current%3B%0A%20%20%20%20var%20previous%20%3D%20current%3B%0A%20%20%20%20var%20current%20%3D%20fibSum%3B%0A%20%20%7D%3B%0A%0A%20%20%2F%2Freduce%20the%20array%20of%20odd%20Fibonacci%20numbers%20to%20get%20the%20final%20num%0A%20%20var%20num%20%3D%20oddFibArr.reduce(function(previousValue%2C%20currentValue%2C%20index%2C%20array)%20%7B%0A%20%20%20%20return%20previousValue%20%2B%20currentValue%3B%0A%20%20%7D)%3B%0A%20%20return%20num%3B%0A%7D%0A%0AsumFibs(4)%3B" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.</p><p class="wrappable negative-10">The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.</p><p class="wrappable negative-10">As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.</p><p class="wrappable negative-10">Remember to use <a href="//github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck" target="_blank">Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.</p><div class="negative-30-bottom"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_(.25)" target="_blank">Remainder</a></li></ul></div></div></div>


####Answer:
```javascript
function sumFibs(num) {
  //Not calculating negative fibonacci numbers
  if(num < 1) {return num;}
  
  var previous = 0;
  var current = 1;
  var fibSum = previous + current;
  var oddFibArr = []

  // Generate Fibonacci sequence and add odd values to an array
  while(fibSum <= num) {
    if (fibSum % 2 === 1) {oddFibArr.push(fibSum);}
    var fibSum = previous + current;
    var previous = current;
    var current = fibSum;
  };

  //reduce the array of odd Fibonacci numbers to get the final num
  var num = oddFibArr.reduce(function(previousValue, currentValue, index, array) {
    return previousValue + currentValue;
  });
  return num;
}

sumFibs(4);
```