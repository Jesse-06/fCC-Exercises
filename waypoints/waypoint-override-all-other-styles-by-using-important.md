#Waypoint: Override All Other Styles by using Important
<a href="http://freecodecamp.com/challenges/Waypoint:%20Override%20All%20Other%20Styles%20by%20using%20Important?solution=%3Cstyle%3E%0A%20%20body%20%7B%0A%20%20%20%20background-color%3A%20black%3B%0A%20%20%20%20font-family%3A%20Monospace%3B%0A%20%20%20%20color%3A%20green%3B%0A%20%20%7D%0A%20%20%23orange-text%20%7B%0A%20%20%20%20color%3A%20orange%3B%0A%20%20%7D%0A%20%20.pink-text%20%7B%0A%20%20%20%20color%3A%20pink%20!important%3B%0A%20%20%7D%0A%20%20.blue-text%20%7B%0A%20%20%20%20color%3A%20blue%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%3Ch1%20id%3D%22orange-text%22%20class%3D%22pink-text%20blue-text%22%20style%3D%22color%3A%20white%22%3EHello%20World!%3C%2Fh1%3E%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Yay! We just proved that in-line styles will override all the CSS declarations in your <code>style</code> element.</p><p class="wrappable negative-10">But wait. There&apos;s one last way to override CSS. This is the most powerful method of all. But before we do it, let&apos;s talk about why you would ever want to override CSS.</p><p class="wrappable negative-10">In many situations, you will use CSS libraries. These may accidentally override your own CSS. So when you absolutely need to be sure that an element has specific CSS, you can use <code>!important</code>.</p><p class="wrappable negative-10">Let&apos;s go all the way back to our <code>pink-text</code> class declaration. Remember that our <code>pink-text</code> class was overridden by subsequent class declarations, id declarations, and in-line styles.</p><p class="wrappable negative-10">Let&apos;s add the keyword <code>!important</code> to your pink-text element&apos;s color declaration to make 100% sure that your <code>h1</code> element will be pink.</p><p class="wrappable negative-10">An example of how to do this is: <code>color: red !important;</code></p><div class="negative-bottom-margin-30"></div>


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
    color: pink !important;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>

```