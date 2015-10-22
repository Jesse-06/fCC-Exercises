#Waypoint: Specify How Fonts Should Degrade
<a href="http://freecodecamp.com/challenges/waypoint-specify-how-fonts-should-degrade#?solution=%3C!--%0A%3Clink%20href%3D%22http%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DLobster%22%20rel%3D%22stylesheet%22%20type%3D%22text%2Fcss%22%3E%0A--%3E%0A%3Cstyle%3E%0A%20%20.red-text%20%7B%0A%20%20%20%20color%3A%20red%3B%0A%20%20%7D%0A%0A%20%20h2%20%7B%0A%20%20%20%20font-family%3A%20Lobster%2C%20Monospace%3B%0A%20%20%7D%0A%0A%20%20p%20%7B%0A%20%20%20%20font-size%3A%2016px%3B%0A%20%20%20%20font-family%3A%20Monospace%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%0A%3Ch2%20class%3D%22red-text%22%3ECatPhotoApp%3C%2Fh2%3E%0A%0A%3Cp%20class%3D%22red-text%22%3EKitty%20ipsum%20dolor%20sit%20amet%2C%20shed%20everywhere%20shed%20everywhere%20stretching%20attack%20your%20ankles%20chase%20the%20red%20dot%2C%20hairball%20run%20catnip%20eat%20the%20grass%20sniff.%3C%2Fp%3E%0A%3Cp%20class%3D%22red-text%22%3EPurr%20jump%20eat%20the%20grass%20rip%20the%20couch%20scratched%20sunbathe%2C%20shed%20everywhere%20rip%20the%20couch%20sleep%20in%20the%20sink%20fluffy%20fur%20catnip%20scratched.%3C%2Fp%3E" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">There are several default fonts that are available in all browsers. These include <code>Monospace</code>, <code>Serif</code> and <code>Sans-Serif</code>. Leave <code>Lobster</code> as the font-family for your <code>h2</code> elements. Make them &quot;degrade&quot; to <code>Monospace</code> when <code>Lobster</code> isn&apos;t available.</p><p class="wrappable negative-10">For example, if you wanted an element to use the <code>Helvetica</code> font, but also degrade to the <code>Sans-Serif</code> font when <code>Helvetica</code> wasn&apos;t available, you could use this CSS style: <code>p { font-family: Helvetica, Sans-Serif; }</code>.</p><p class="wrappable negative-10">Now comment out your call to Google Fonts, so that the <code>Lobster</code> font isn&apos;t available. Notice how it degrades to the <code>Monospace</code> font.</p><div class="negative-bottom-margin-30"></div>


####Answer:
```javascript
<!--
<link href="http://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
-->
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p class="red-text">Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
```