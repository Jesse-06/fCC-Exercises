#Waypoint: Inherit Styles from the Body Element
<a href="http://freecodecamp.com/challenges/Waypoint:%20Inherit%20Styles%20from%20the%20Body%20Element?solution=%3Cstyle%3E%0A%20%20body%20%7B%0A%20%20%20%20background-color%3A%20black%3B%0A%20%20%20%20color%3A%20green%3B%0A%20%20%20%20font-family%3A%20Monospace%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%3Ch1%3EHello%20World%3C%2Fh1%3E" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Now we&apos;ve proven that every HTML page has a <code>body</code> element, and that its <code>body</code> element can also be styled with CSS.</p><p class="wrappable negative-10">Remember, you can style your <code>body</code> element just like any other HTML element, and all your other elements will inherit your <code>body</code> element&apos;s styles.</p><p class="wrappable negative-10">First, create a <code>h1</code> element with the text <code>Hello World</code>.</p><p class="wrappable negative-10">Then, let&apos;s give all elements on your page the color of <code>green</code> by adding <code>color: green;</code> to your <code>body</code> element&apos;s style declaration.</p><p class="wrappable negative-10">Finally, give your <code>body</code> element the font-family of <code>Monospace</code> by adding <code>font-family: Monospace;</code> to your <code>body</code> element&apos;s style declaration.</p><div class="negative-bottom-margin-30"></div>


####Answer:
```javascript
<style>
  body {
    background-color: black;
    color: green;
    font-family: Monospace;
  }
</style>
<h1>Hello World</h1>
```