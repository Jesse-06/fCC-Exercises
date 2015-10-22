#Bonfire: Everything Be True
<a href="http://freecodecamp.com/challenges/Bonfire:%20Everything%20Be%20True?solution=function%20every(collection%2C%20pre)%20%7B%0A%0A%20%20for%20(var%20i%20%3D%200%3B%20i%20%3C%20collection.length%20-%201%3B%20i%2B%2B)%20%7B%0A%20%20%20%20if(!collection%5Bi%5D.hasOwnProperty(pre))%20%7B%0A%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%0A%20%20return%20true%3B%0A%20%20%7D%0A%0Aevery(%5B%7B%22user%22%3A%20%22Tinky-Winky%22%2C%20%22sex%22%3A%20%22male%22%7D%2C%20%7B%22user%22%3A%20%22Dipsy%22%2C%20%22sex%22%3A%20%22male%22%7D%2C%20%7B%22user%22%3A%20%22Laa-Laa%22%2C%20%22sex%22%3A%20%22female%22%7D%2C%20%7B%22user%22%3A%20%22Po%22%2C%20%22sex%22%3A%20%22female%22%7D%5D%2C%20%22sex%22)%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Check if the predicate (second argument) returns truthy (defined) for all elements of a collection (first argument).</p><p class="wrappable negative-10">For this, check to see if the property defined in the second argument is present on every element of the collection.</p><p class="wrappable negative-10">Remember, you can access object properties through either dot notation or [] notation.</p><p class="wrappable negative-10">Remember to use <a href="//github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck" target="_blank">Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.</p><div class="negative-30-bottom"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty" target="_blank">Object.hasOwnProperty()</a></li></ul></div><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames" target="_blank">Object.getOwnPropertyNames()</a></li></ul></div></div></div>


####Answer:
```javascript
function every(collection, pre) {

  for (var i = 0; i < collection.length - 1; i++) {
    if(!collection[i].hasOwnProperty(pre)) {
      return false;
    }
  }
  
  return true;
  }

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

```