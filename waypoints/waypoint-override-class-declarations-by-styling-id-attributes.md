#Waypoint: Override Class Declarations by Styling ID Attributes
<a href="http://freecodecamp.com/challenges/Waypoint:%20Override%20Class%20Declarations%20by%20Styling%20ID%20Attributes?solution=%3Cstyle%3E%0A%20%20body%20%7B%0A%20%20%20%20background-color%3A%20black%3B%0A%20%20%20%20font-family%3A%20Monospace%3B%0A%20%20%20%20color%3A%20green%3B%0A%20%20%7D%0A%20%20.pink-text%20%7B%0A%20%20%20%20color%3A%20pink%3B%0A%20%20%7D%0A%20%20.blue-text%20%7B%0A%20%20%20%20color%3A%20blue%3B%0A%20%20%7D%0A%20%20%23orange-text%20%7B%0A%20%20%20%20color%3A%20orange%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%3Ch1%20id%3D%22orange-text%22%20class%3D%22pink-text%20blue-text%22%3EHello%20World!%3C%2Fh1%3E%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">We just proved that browsers read CSS from top to bottom. That means that, in the event of a conflict, the browser will use whichever CSS declaration came last.</p><p class="wrappable negative-10">But we&apos;re not done yet. There are other ways that you can override CSS. Do you remember id attributes?</p><p class="wrappable negative-10">Let&apos;s override your <code>pink-text</code> and <code>blue-text</code> classes, and make your <code>h1</code> element orange, by giving the <code>h1</code> element an id and then styling that id.</p><p class="wrappable negative-10">Give your <code>h1</code> element the <code>id</code> attribute of <code>orange-text</code>. Remember, id styles look like this: <code>&lt;h1 id=&quot;orange-text&quot;&gt;</code></p><p class="wrappable negative-10">Leave the <code>blue-text</code> and <code>pink-text</code> classes on your <code>h1</code> element.</p><p class="wrappable negative-10">Create a CSS declaration for your <code>orange-text</code> id in your <code>style</code> element. Here&apos;s an example of what this looks like: <code>#brown-text { color: brown; }</code></p><div class="negative-bottom-margin-30"></div>


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
  #orange-text {
    color: orange;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text">Hello World!</h1>

```