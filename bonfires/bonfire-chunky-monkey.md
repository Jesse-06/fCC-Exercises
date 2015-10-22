#Bonfire: Chunky Monkey
<a href="http://freecodecamp.com/challenges/Bonfire:%20Chunky%20Monkey?solution=function%20chunk(arr%2C%20size)%20%7B%0A%20%20var%20tmpArr%20%3D%20arr%3B%0A%20%20var%20arr%20%3D%20%5B%5D%0A%20%20while%20(tmpArr.length%20%3E%20size)%20%7B%0A%20%20%09arr.push(tmpArr.splice(0%2C%20size))%0A%20%20%7D%0A%20%20%09arr.push(tmpArr)%3B%0A%09console.log(arr)%0A%09return%20arr%3B%0A%7D%0A%0Achunk(%5B%22a%22%2C%20%22b%22%2C%20%22c%22%2C%20%22d%22%5D%2C%202%2C%20%22%22)%3B" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.</p><p class="wrappable negative-10">Remember to use <a href="//github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck" target="_blank">Read-Search-Ask</a> if you get stuck. Write your own code.</p><div class="negative-30-bottom"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push" target="_blank">Array.push()</a></li></ul></div></div></div>


####Answer:
```javascript
function chunk(arr, size) {
  var tmpArr = arr;
  var arr = []
  while (tmpArr.length > size) {
  	arr.push(tmpArr.splice(0, size))
  }
  	arr.push(tmpArr);
	console.log(arr)
	return arr;
}

chunk(["a", "b", "c", "d"], 2, "");
```