#Waypoint: Use a CSS Class to Style an Element
<a href="http://freecodecamp.com/challenges/Waypoint:%20Use%20a%20CSS%20Class%20to%20Style%20an%20Element?solution=%3Cstyle%3E%0A%20%20.red-text%20%7B%0A%20%20%20%20color%3A%20red%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%0A%3Ch2%20class%3D%22red-text%22%3ECatPhotoApp%3C%2Fh2%3E%0A%0A%3Cp%3EKitty%20ipsum%20dolor%20sit%20amet%2C%20shed%20everywhere%20shed%20everywhere%20stretching%20attack%20your%20ankles%20chase%20the%20red%20dot%2C%20hairball%20run%20catnip%20eat%20the%20grass%20sniff.%3C%2Fp%3E%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Create a CSS class called <code>red-text</code> and apply it to your <code>h2</code> element.</p><p class="wrappable negative-10">Classes are reusable styles that can be added to HTML elements.</p><p class="wrappable negative-10">Here&apos;s an example CSS class declaration:</p><p class="wrappable negative-10"><code>&lt;style&gt;</code></p><p class="wrappable negative-10"><code>&#x2009;&#x2009;.blue-text {</code></p><p class="wrappable negative-10"><code>&#x2009;&#x2009;&#x2009;&#x2009;color: blue;</code></p><p class="wrappable negative-10"><code>&#x2009;&#x2009;}</code></p><p class="wrappable negative-10"><code>&lt;/style&gt;</code></p><p class="wrappable negative-10">You can see that we&apos;ve created a CSS class called <code>blue-text</code> within the <code>&lt;style&gt;</code> tag.</p><p class="wrappable negative-10">You can apply a class to an HTML element like this: <code>&lt;h2 class=&quot;blue-text&quot;&gt;CatPhotoApp&lt;/h2&gt;</code>.</p><p class="wrappable negative-10">Note that in your CSS <code>style</code> element, classes should start with a period. In your HTML elements&apos; class declarations, classes shouldn&apos;t start with a period.</p><p class="wrappable negative-10">Instead of creating a new <code>style</code> element, try removing the <code>h2</code> style declaration from your existing style element, then replace it with the class declaration for <code>.red-text</code>.</p><div class="negative-bottom-margin-30"></div>


####Answer:
```javascript
<style>
  .red-text {
    color: red;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>

```