#Bonfire: Where art thou
<a href="http://freecodecamp.com/challenges/Bonfire:%20Where%20art%20thou?solution=function%20where(collection%2C%20source)%20%7B%0Avar%20arr%20%3D%5B%5D%3B%0A%2F%2Fnumber%20of%20matches%20required%20to%20return%20the%20object%0Avar%20matches%20%3D%20Object.keys(source).length%0A%0A%0Afor(var%20i%3D0%3Bi%3Ccollection.length%3Bi%2B%2B)%20%7B%0A%20%20var%20count%20%3D%200%0A%20%20var%20c%20%3D%20collection%5Bi%5D%0A%20%20for%20(var%20prop%20in%20c)%20%7B%0A%20%20%20%20if%20(c%5Bprop%5D%20%3D%3D%3D%20source%5Bprop%5D)%20%7B%0A%20%20%20%20%09count%2B%2B%0A%20%20%20%20%09if%20(count%20%3D%3D%3D%20matches)%20arr.push(c)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%20%20return%20arr%3B%0A%0A%7D%0A%0Awhere(%5B%7B%20first%3A%20%22Romeo%22%2C%20last%3A%20%22Montague%22%20%7D%2C%20%7B%20first%3A%20%22Mercutio%22%2C%20last%3A%20null%20%7D%2C%20%7B%20first%3A%20%22Tybalt%22%2C%20last%3A%20%22Capulet%22%20%7D%5D%2C%20%7B%20last%3A%20%22Capulet%22%20%7D)%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.</p><p class="wrappable negative-10">For example, if the first argument is <code>[{ first: &quot;Romeo&quot;, last: &quot;Montague&quot; }, { first: &quot;Mercutio&quot;, last: null }, { first: &quot;Tybalt&quot;, last: &quot;Capulet&quot; }]</code>, and the second argument is <code>{ last: &quot;Capulet&quot; }</code>, then you must return the third object from the array (the first argument), because it contains the property and it&apos;s value, that was passed on as the second argument.</p><p class="wrappable negative-10">Remember to use <a href="//github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck" target="_blank">Read-Search-Ask</a> if you get stuck. Write your own code.</p><div class="negative-30-bottom"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" target="_blank">Global Object</a></li></ul></div><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty" target="_blank">Object.hasOwnProperty()</a></li></ul></div><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys" target="_blank">Object.keys()</a></li></ul></div></div></div>


####Answer:
```javascript
function where(collection, source) {
var arr =[];
//number of matches required to return the object
var matches = Object.keys(source).length


for(var i=0;i<collection.length;i++) {
  var count = 0
  var c = collection[i]
  for (var prop in c) {
    if (c[prop] === source[prop]) {
    	count++
    	if (count === matches) arr.push(c);
    }
  }
}
  return arr;

}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

```