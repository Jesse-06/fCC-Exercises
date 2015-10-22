#Waypoint: Prioritize One Style Over Another
<a href="http://freecodecamp.com/challenges/Waypoint:%20Prioritize%20One%20Style%20Over%20Another?solution=%3Cstyle%3E%0A%20%20body%20%7B%0A%20%20%20%20background-color%3A%20black%3B%0A%20%20%20%20font-family%3A%20Monospace%3B%0A%20%20%20%20color%3A%20green%3B%0A%20%20%7D%0A%20%20.pink-text%20%7B%0A%20%20%20%20color%3A%20pink%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%3Ch1%20class%3D%22pink-text%22%3EHello%20World!%3C%2Fh1%3E%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Sometimes your HTML elements will receive multiple styles that conflict with one another.</p><p class="wrappable negative-10">For example, your <code>h1</code> element can&apos;t be both green and pink at the same time.</p><p class="wrappable negative-10">Let&apos;s see what happens when we create a class that makes text pink, then apply it to an element. Will our class <code>override</code> the <code>body</code> element&apos;s <code>color: green;</code> CSS property?</p><p class="wrappable negative-10">Create a CSS class called <code>pink-text</code> that gives an element the color pink.</p><p class="wrappable negative-10">Give your <code>h1</code> element the class of <code>pink-text</code>.</p><div class="negative-bottom-margin-30"></div>


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
</style>
<h1 class="pink-text">Hello World!</h1>

```