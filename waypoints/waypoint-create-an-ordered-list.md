#Waypoint: Create an Ordered List
<a href="http://freecodecamp.com/challenges/Waypoint:%20Create%20an%20Ordered%20List?solution=%3Clink%20href%3D%22http%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DLobster%22%20rel%3D%22stylesheet%22%20type%3D%22text%2Fcss%22%3E%0A%3Cstyle%3E%0A%20%20.red-text%20%7B%0A%20%20%20%20color%3A%20red%3B%0A%20%20%7D%0A%0A%20%20h2%20%7B%0A%20%20%20%20font-family%3A%20Lobster%2C%20Monospace%3B%0A%20%20%7D%0A%0A%20%20p%20%7B%0A%20%20%20%20font-size%3A%2016px%3B%0A%20%20%20%20font-family%3A%20Monospace%3B%0A%20%20%7D%0A%0A%20%20.thick-green-border%20%7B%0A%20%20%20%20border-color%3A%20green%3B%0A%20%20%20%20border-width%3A%2010px%3B%0A%20%20%20%20border-style%3A%20solid%3B%0A%20%20%20%20border-radius%3A%2050%25%3B%0A%20%20%7D%0A%0A%20%20.smaller-image%20%7B%0A%20%20%20%20width%3A%20100px%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%0A%3Ch2%20class%3D%22red-text%22%3ECatPhotoApp%3C%2Fh2%3E%0A%0A%3Cp%3EClick%20here%20for%20%3Ca%20href%3D%22%23%22%3Ecat%20photos%3C%2Fa%3E.%3C%2Fp%3E%0A%0A%3Ca%20href%3D%22%23%22%3E%3Cimg%20class%3D%22smaller-image%20thick-green-border%22%20src%3D%22https%3A%2F%2Fbit.ly%2Ffcc-relaxing-cat%22%3E%3C%2Fa%3E%0A%0A%3Cp%3EThings%20cats%20love%3A%3C%2Fp%3E%0A%3Cul%3E%0A%20%20%3Cli%3Ecat%20nip%3C%2Fli%3E%0A%20%20%3Cli%3Elaser%20pointers%3C%2Fli%3E%0A%20%20%3Cli%3Elasagna%3C%2Fli%3E%0A%3C%2Ful%3E%0A%3Cp%3ETop%203%20things%20cats%20hate%3A%3C%2Fp%3E%0A%3Col%3E%0A%20%20%3Cli%3Edogs%3C%2Fli%3E%0A%20%20%3Cli%3Ewater%3C%2Fli%3E%0A%20%20%3Cli%3Emice%3C%2Fli%3E%0A%3C%2Fol%3E" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">HTML has a special element for creating <code>ordered lists</code>, or numbered-style lists.</p><p class="wrappable negative-10">Ordered lists start with a <code>&lt;ol&gt;</code> element. Then they contain some number of <code>&lt;li&gt;</code> elements.</p><p class="wrappable negative-10">For example:</p><p class="wrappable negative-10"><code>&lt;ol&gt;</code></p><p class="wrappable negative-10">&#x2009;&#x2009;<code>&lt;li&gt;hydrogen&lt;/li&gt;</code></p><p class="wrappable negative-10">&#x2009;&#x2009;<code>&lt;li&gt;helium&lt;/li&gt;</code></p><p class="wrappable negative-10"><code>&lt;/ol&gt;</code></p><p class="wrappable negative-10">would create a numbered list of &quot;hydrogen&quot; and &quot;helium&quot;.</p><p class="wrappable negative-10">Create an ordered list of the top 3 things cats hate the most.</p><div class="negative-bottom-margin-30"></div>


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

<p>Click here for <a href="#">cat photos</a>.</p>

<a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat"></a>

<p>Things cats love:</p>
<ul>
  <li>cat nip</li>
  <li>laser pointers</li>
  <li>lasagna</li>
</ul>
<p>Top 3 things cats hate:</p>
<ol>
  <li>dogs</li>
  <li>water</li>
  <li>mice</li>
</ol>
```