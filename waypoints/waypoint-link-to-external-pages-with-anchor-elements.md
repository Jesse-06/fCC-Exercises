#Waypoint: Link to External Pages with Anchor Elements
<a href="http://freecodecamp.com/challenges/Waypoint:%20Link%20to%20External%20Pages%20with%20Anchor%20Elements?solution=%3Clink%20href%3D%22http%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DLobster%22%20rel%3D%22stylesheet%22%20type%3D%22text%2Fcss%22%3E%0A%3Cstyle%3E%0A%20%20.red-text%20%7B%0A%20%20%20%20color%3A%20red%3B%0A%20%20%7D%0A%0A%20%20h2%20%7B%0A%20%20%20%20font-family%3A%20Lobster%2C%20Monospace%3B%0A%20%20%7D%0A%0A%20%20p%20%7B%0A%20%20%20%20font-size%3A%2016px%3B%0A%20%20%20%20font-family%3A%20Monospace%3B%0A%20%20%7D%0A%0A%20%20.thick-green-border%20%7B%0A%20%20%20%20border-color%3A%20green%3B%0A%20%20%20%20border-width%3A%2010px%3B%0A%20%20%20%20border-style%3A%20solid%3B%0A%20%20%20%20border-radius%3A%2050%25%3B%0A%20%20%7D%0A%0A%20%20.smaller-image%20%7B%0A%20%20%20%20width%3A%20100px%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%0A%3Ch2%20class%3D%22red-text%22%3ECatPhotoApp%3C%2Fh2%3E%0A%0A%3Cimg%20class%3D%22smaller-image%20thick-green-border%22%20src%3D%22https%3A%2F%2Fbit.ly%2Ffcc-relaxing-cat%22%3E%0A%0A%3Cp%20class%3D%22red-text%22%3EKitty%20ipsum%20dolor%20sit%20amet%2C%20shed%20everywhere%20shed%20everywhere%20stretching%20attack%20your%20ankles%20chase%20the%20red%20dot%2C%20hairball%20run%20catnip%20eat%20the%20grass%20sniff.%3C%2Fp%3E%0A%3Cp%20class%3D%22red-text%22%3EPurr%20jump%20eat%20the%20grass%20rip%20the%20couch%20scratched%20sunbathe%2C%20shed%20everywhere%20rip%20the%20couch%20sleep%20in%20the%20sink%20fluffy%20fur%20catnip%20scratched.%3C%2Fp%3E%0A%0A%3Ca%20href%3D%22http%3A%2F%2Ffreecatphotoapp.com%22%3Ecat%20photos%3C%2Fa%3E" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10"><code>a</code> elements, also known as <code>anchor</code> elements, are used to link to content outside of the current page.</p><p class="wrappable negative-10">Here&apos;s a diagram of an <code>a</code> element. In this case, the <code>a</code> element is used in the middle of a paragraph element, which means the link will appear in the middle of a sentence.</p><p class="wrappable negative-10"><a href="http://i.imgur.com/hviuZwe.png" data-lightbox="img-enlarge"><img class="img-responsive" title="Click to enlarge" alt="a diagram of how anchor tags are composed with the same text as on the following line" src="http://i.imgur.com/hviuZwe.png"></a></p><p class="wrappable negative-10">Here&apos;s an example: <code>&lt;p&gt;Here&apos;s a &lt;a href=&quot;http://freecodecamp.com&quot;&gt; link to Free Code Camp&lt;/a&gt; for you to follow.&lt;/p&gt;</code>.</p><p class="wrappable negative-10">Create an <code>a</code> element that links to <code>http://freecatphotoapp.com</code> and has &quot;cat photos&quot; as its <code>anchor text</code>.</p><div class="negative-bottom-margin-30"></div>


####Answer:
```javascript
<link href="http://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
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

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>

<img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat">

<p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
<p class="red-text">Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>

<a href="http://freecatphotoapp.com">cat photos</a>
```