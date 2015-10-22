#Bonfire: Sorted Union
<a href="http://freecodecamp.com/challenges/Bonfire:%20Sorted%20Union?solution=function%20unite(arr1%2C%20arr2%2C%20arr3)%20%7B%0A%20%20%0A%20%20%2F%2Fget%20all%20arguments%20passed%20to%20the%20function%0A%20%20var%20argArray%20%3D%20%5B%5D.slice.apply(arguments)%3B%0A%0A%20%20%2F%2Freduce%20arguments%20to%20an%20array%20that%20can%20be%20filtered%0A%20%20var%20argArray%20%3D%20argArray.reduce(function%20(a%2C%20b)%20%7B%0A%20%20%20%20return%20a.concat(b)%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20%2F%2Ffilter%20out%20duplicate%20elements%20in%20the%20array%0A%20%20var%20arr1%20%3D%20argArray.filter(function%20(element%2C%20index)%20%7B%0A%20%20%20%20return%20argArray.indexOf(element)%20%3D%3D%3D%20index%3B%0A%20%20%7D)%3B%0A%20%20%0A%20%20console.log(arr1)%0A%20%20return%20arr1%3B%0A%0A%7D%3B%0A%0Aunite(%5B1%2C%203%2C%202%5D%2C%20%5B5%2C%202%2C%201%2C%204%5D%2C%20%5B2%2C%201%5D)%3B" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.</p><p class="wrappable negative-10">In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.</p><p class="wrappable negative-10">The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.</p><p class="wrappable negative-10">Check the assertion tests for examples.</p><p class="wrappable negative-10">Remember to use <a href="//github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck" target="_blank">Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.</p><div class="negative-30-bottom"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments" target="_blank">Arguments object</a></li></ul></div><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" target="_blank">Array.reduce()</a></li></ul></div></div></div>


####Answer:
```javascript
function unite(arr1, arr2, arr3) {
  
  //get all arguments passed to the function
  var argArray = [].slice.apply(arguments);

  //reduce arguments to an array that can be filtered
  var argArray = argArray.reduce(function (a, b) {
    return a.concat(b);
  }, []);

  //filter out duplicate elements in the array
  var arr1 = argArray.filter(function (element, index) {
    return argArray.indexOf(element) === index;
  });
  
  console.log(arr1)
  return arr1;

};

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```