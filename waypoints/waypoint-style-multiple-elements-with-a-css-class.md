#Waypoint: Style Multiple Elements with a CSS Class
<a href="http://freecodecamp.com/challenges/Waypoint:%20Style%20Multiple%20Elements%20with%20a%20CSS%20Class?solution=%3Cstyle%3E%0A%20%20.red-text%20%7B%0A%20%20%20%20color%3A%20red%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%0A%3Ch2%20class%3D%22red-text%22%3ECatPhotoApp%3C%2Fh2%3E%0A%0A%3Cp%20class%3D%22red-text%22%3EKitty%20ipsum%20dolor%20sit%20amet%2C%20shed%20everywhere%20shed%20everywhere%20stretching%20attack%20your%20ankles%20chase%20the%20red%20dot%2C%20hairball%20run%20catnip%20eat%20the%20grass%20sniff.%3C%2Fp%3E%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Apply the <code>red-text</code> class to your <code>h2</code> and <code>p</code> elements.</p><p class="wrappable negative-10">Remember that you can attach classes to HTML elements by using <code>class=&quot;your-class-here&quot;</code> within the relevant element&apos;s opening tag.</p><p class="wrappable negative-10">Remember that CSS class selectors require a period at the beginning like this: <code>.blue-text { color: blue; }</code>, but that class declarations don&apos;t use a period, like this: <code>&lt;h2 class=&quot;blue-text&quot;&gt;CatPhotoApp&lt;h2&gt;</code>.</p><div class="negative-bottom-margin-30"></div>


####Answer:
```javascript
<style>
  .red-text {
    color: red;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>

```