#Waypoint: Override Class Declarations with Inline Styles
<a href="http://freecodecamp.com/challenges/Waypoint:%20Override%20Class%20Declarations%20with%20Inline%20Styles?solution=%3Cstyle%3E%0A%20%20body%20%7B%0A%20%20%20%20background-color%3A%20black%3B%0A%20%20%20%20font-family%3A%20Monospace%3B%0A%20%20%20%20color%3A%20green%3B%0A%20%20%7D%0A%20%20%23orange-text%20%7B%0A%20%20%20%20color%3A%20orange%3B%0A%20%20%7D%0A%20%20.pink-text%20%7B%0A%20%20%20%20color%3A%20pink%3B%0A%20%20%7D%0A%20%20.blue-text%20%7B%0A%20%20%20%20color%3A%20blue%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%3Ch1%20style%3D%22color%3A%20white%22%20id%3D%22orange-text%22%20class%3D%22pink-text%20blue-text%22%3EHello%20World!%3C%2Fh1%3E%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">So we&apos;ve proven that id declarations override class declarations, regardless of where they are declared in your <code>style</code> element CSS.</p><p class="wrappable negative-10">There are other ways that you can override CSS. Do you remember inline styles?</p><p class="wrappable negative-10">Use an <code>in-line style</code> to try to make our <code>h1</code> element white. Remember, in line styles look like this: <code>&lt;h1 style=&quot;color: green&quot;&gt;</code></p><p class="wrappable negative-10">Leave the <code>blue-text</code> and <code>pink-text</code> classes on your <code>h1</code> element.</p><div class="negative-bottom-margin-30"></div>


####Answer:
```javascript
<style>
  body {
    background-color: black;
    font-family: Monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 style="color: white" id="orange-text" class="pink-text blue-text">Hello World!</h1>

```