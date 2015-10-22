#Waypoint: Set the Font Family of an Element
<a href="http://freecodecamp.com/challenges/Waypoint:%20Set%20the%20Font%20Family%20of%20an%20Element?solution=%3Cstyle%3E%0A%20%20.red-text%20%7B%0A%20%20%20%20color%3A%20red%3B%0A%20%20%7D%0A%0A%20%20p%20%7B%0A%20%20%20%20font-family%3A%20Monospace%3B%0A%20%20%20%20font-size%3A%2016px%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%0A%3Ch2%20class%3D%22red-text%22%3ECatPhotoApp%3C%2Fh2%3E%0A%0A%3Cp%20class%3D%22red-text%22%3EKitty%20ipsum%20dolor%20sit%20amet%2C%20shed%20everywhere%20shed%20everywhere%20stretching%20attack%20your%20ankles%20chase%20the%20red%20dot%2C%20hairball%20run%20catnip%20eat%20the%20grass%20sniff.%3C%2Fp%3E%0A%3Cp%3EPurr%20jump%20eat%20the%20grass%20rip%20the%20couch%20scratched%20sunbathe%2C%20shed%20everywhere%20rip%20the%20couch%20sleep%20in%20the%20sink%20fluffy%20fur%20catnip%20scratched.%3C%2Fp%3E%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Make all of your <code>p</code> elements use the <code>Monospace</code> font.</p><p class="wrappable negative-10">You can set an element&apos;s font by using the <code>font-family</code> property.</p><p class="wrappable negative-10">For example, if you wanted to set your <code>h2</code> element&apos;s font to <code>Sans-serif</code>, you would use the following CSS: <code>h2 { font-family: Sans-serif; }</code>.</p><div class="negative-bottom-margin-30"></div>


####Answer:
```javascript
<style>
  .red-text {
    color: red;
  }

  p {
    font-family: Monospace;
    font-size: 16px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>

```