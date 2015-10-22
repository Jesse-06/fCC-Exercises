#Waypoint: Use CSS Selectors to Style Elements
<a href="http://freecodecamp.com/challenges/Waypoint:%20Use%20CSS%20Selectors%20to%20Style%20Elements?solution=%3Cstyle%3E%0A%20%20h2%20%7B%0A%20%20%20%20color%3A%20blue%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%3Ch2%3ECatPhotoApp%3C%2Fh2%3E%0A%0A%3Cp%3EKitty%20ipsum%20dolor%20sit%20amet%2C%20shed%20everywhere%20shed%20everywhere%20stretching%20attack%20your%20ankles%20chase%20the%20red%20dot%2C%20hairball%20run%20catnip%20eat%20the%20grass%20sniff.%3C%2Fp%3E%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Delete your <code>h2</code> element&apos;s style attribute and instead create a CSS <code>style</code> element. Add the necessary CSS to turn all <code>h2</code> elements blue.</p><p class="wrappable negative-10">With CSS, there are hundreds of CSS <code>properties</code> that you can use to change the way an element looks on your page.</p><p class="wrappable negative-10">When you entered <code>&lt;h2 style=&quot;color: red&quot;&gt;CatPhotoApp&lt;/h2&gt;</code>, you were giving that individual <code>h2</code> element an <code>inline style</code>.</p><p class="wrappable negative-10">That&apos;s one way to add style to an element, but a better way is by using <code>CSS</code>, which stands for <code>Cascading Style Sheets</code>.</p><p class="wrappable negative-10">At the top of your code, create a <code>style</code> element like this: <code>&lt;style&gt;&lt;/style&gt;</code>.</p><p class="wrappable negative-10">Inside that style element, you can create a <code>CSS selector</code> for all <code>h2</code> elements. For example, if you wanted all <code>h2</code> elements to be red, your style element would look like this: <code>&lt;style&gt;h2 {color: red;}&lt;/style&gt;</code>.</p><p class="wrappable negative-10">Note that it&apos;s important to have both opening and closing curly braces (<code>{</code> and <code>}</code>) around each element&apos;s style. You also need to make sure your element&apos;s style is between the opening and closing style tags. Finally, be sure to add the semicolon to the end of each of your element&apos;s styles.</p><div class="negative-bottom-margin-30"></div>


####Answer:
```javascript
<style>
  h2 {
    color: blue;
  }
</style>
<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>

```