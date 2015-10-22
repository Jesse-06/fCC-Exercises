#Bonfire: Mutations
<a href="http://freecodecamp.com/challenges/Bonfire:%20Mutations?solution=function%20mutation(arr)%20%7B%0Aarr1%20%3D%20arr%5B0%5D.toLowerCase().split(%27%27)%0Aarr2%20%3D%20arr%5B1%5D.toLowerCase().split(%27%27)%0Afor(var%20i%20%3D%200%3B%20i%20%3C%20arr2.length%3B%20i%2B%2B)%20%7B%0A%09if%20(arr1.indexOf(arr2%5Bi%5D)%20%3D%3D%20-1)%20%7B%20return%20false%3B%20%7D%0A%7D%0A%09return%20true%3B%0A%7D%0Amutation(%5B%22abcdefgh%22%2C%20%22hE%22%5D%2C%20%22%22)%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.</p><p class="wrappable negative-10">For example, <code>[&quot;hello&quot;, &quot;Hello&quot;]</code>, should return true because all of the letters in the second string are present in the first, ignoring case.</p><p class="wrappable negative-10">The arguments <code>[&quot;hello&quot;, &quot;hey&quot;]</code> should return false because the string &quot;hello&quot; does not contain a &quot;y&quot;.</p><p class="wrappable negative-10">Lastly, <code>[&quot;Alien&quot;, &quot;line&quot;]</code>, should return true because all of the letters in &quot;line&quot; are present in &quot;Alien&quot;.</p><p class="wrappable negative-10">Remember to use <a href="//github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck" target="_blank">Read-Search-Ask</a> if you get stuck. Write your own code.</p><div class="negative-30-bottom"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf" target="_blank">Array.indexOf()</a></li></ul></div></div></div>


####Answer:
```javascript
function mutation(arr) {
arr1 = arr[0].toLowerCase().split('')
arr2 = arr[1].toLowerCase().split('')
for(var i = 0; i < arr2.length; i++) {
	if (arr1.indexOf(arr2[i]) == -1) { return false; }
}
	return true;
}
mutation(["abcdefgh", "hE"], "");

```