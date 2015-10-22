#Waypoint: Override Styles in Subsequent CSS
<a href="http://freecodecamp.com/challenges/Waypoint:%20Override%20Styles%20in%20Subsequent%20CSS?solution=%3Cstyle%3E%0A%20%20body%20%7B%0A%20%20%20%20background-color%3A%20black%3B%0A%20%20%20%20font-family%3A%20Monospace%3B%0A%20%20%20%20color%3A%20green%3B%0A%20%20%7D%0A%20%20.pink-text%20%7B%0A%20%20%20%20color%3A%20pink%3B%0A%20%20%7D%0A%20%20%0A%20%20.blue-text%20%7B%0A%20%20%20%20color%3A%20blue%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%3Ch1%20class%3D%22%20blue-text%20pink-text%22%3EHello%20World!%3C%2Fh1%3E%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Our &quot;pink-text&quot; class overrode our <code>body</code> element&apos;s CSS declaration!</p><p class="wrappable negative-10">We just proved that our classes will override the <code>body</code> element&apos;s CSS. So the next logical question is, what can we do to override our <code>pink-text</code> class?</p><p class="wrappable negative-10">Create an additional CSS class called <code>blue-text</code> that gives an element the color blue. Make sure it&apos;s below your <code>pink-text</code> class declaration.</p><p class="wrappable negative-10">Apply the <code>blue-text</code> class to your <code>h1</code> element in addition to your <code>pink-text</code> class, and let&apos;s see which one wins.</p><p class="wrappable negative-10">Applying multiple class attributes to a HTML element is done with a space between them like this: <code>class=&quot;class1 class2&quot;</code></p><div class="negative-bottom-margin-30"></div>


####Answer:
```javascript
<style>
  body {
    background-color: black;
    font-family: Monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
  
  .blue-text {
    color: blue;
  }
</style>
<h1 class=" blue-text pink-text">Hello World!</h1>

```