#Waypoint: Use Responsive Design with Bootstrap Fluid Containers
<a href="http://freecodecamp.com/challenges/Waypoint:%20Use%20Responsive%20Design%20with%20Bootstrap%20Fluid%20Containers?solution=%3Clink%20href%3D%22http%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DLobster%22%20rel%3D%22stylesheet%22%20type%3D%22text%2Fcss%22%3E%0A%3Cstyle%3E%0A%20%20.red-text%20%7B%0A%20%20%20%20color%3A%20red%3B%0A%20%20%7D%0A%0A%20%20h2%20%7B%0A%20%20%20%20font-family%3A%20Lobster%2C%20Monospace%3B%0A%20%20%7D%0A%0A%20%20p%20%7B%0A%20%20%20%20font-size%3A%2016px%3B%0A%20%20%20%20font-family%3A%20Monospace%3B%0A%20%20%7D%0A%0A%20%20.thick-green-border%20%7B%0A%20%20%20%20border-color%3A%20green%3B%0A%20%20%20%20border-width%3A%2010px%3B%0A%20%20%20%20border-style%3A%20solid%3B%0A%20%20%20%20border-radius%3A%2050%25%3B%0A%20%20%7D%0A%0A%20%20.smaller-image%20%7B%0A%20%20%20%20width%3A%20100px%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%3Cdiv%20class%3D%22container-fluid%22%3E%0A%3Ch2%20class%3D%22red-text%22%3ECatPhotoApp%3C%2Fh2%3E%0A%0A%3Cp%3EClick%20here%20for%20%3Ca%20href%3D%22%23%22%3Ecat%20photos%3C%2Fa%3E.%3C%2Fp%3E%0A%0A%3Ca%20href%3D%22%23%22%3E%3Cimg%20class%3D%22smaller-image%20thick-green-border%22%20src%3D%22https%3A%2F%2Fbit.ly%2Ffcc-relaxing-cat%22%3E%3C%2Fa%3E%0A%0A%3Cp%3EThings%20cats%20love%3A%3C%2Fp%3E%0A%3Cul%3E%0A%20%20%3Cli%3Ecat%20nip%3C%2Fli%3E%0A%20%20%3Cli%3Elaser%20pointers%3C%2Fli%3E%0A%20%20%3Cli%3Elasagna%3C%2Fli%3E%0A%3C%2Ful%3E%0A%3Cp%3ETop%203%20things%20cats%20hate%3A%3C%2Fp%3E%0A%3Col%3E%0A%20%20%3Cli%3Eflea%20treatment%3C%2Fli%3E%0A%20%20%3Cli%3Ethunder%3C%2Fli%3E%0A%20%20%3Cli%3Eother%20cats%3C%2Fli%3E%0A%3C%2Fol%3E%0A%3Cform%20action%3D%22%2Fsubmit-cat-photo%22%3E%0A%20%20%3Clabel%3E%3Cinput%20type%3D%22radio%22%20name%3D%22indoor-outdoor%22%3E%20Indoor%3C%2Flabel%3E%0A%20%20%3Clabel%3E%3Cinput%20type%3D%22radio%22%20name%3D%22indoor-outdoor%22%3E%20Outdoor%3C%2Flabel%3E%0A%20%20%3Clabel%3E%3Cinput%20type%3D%22checkbox%22%20name%3D%22personality%22%3E%20Loving%3C%2Flabel%3E%0A%20%20%3Clabel%3E%3Cinput%20type%3D%22checkbox%22%20name%3D%22personality%22%3E%20Lazy%3C%2Flabel%3E%0A%20%20%3Clabel%3E%3Cinput%20type%3D%22checkbox%22%20name%3D%22personality%22%3E%20Crazy%3C%2Flabel%3E%0A%20%20%3Cinput%20type%3D%22text%22%20placeholder%3D%22cat%20photo%20URL%22%20required%3E%0A%20%20%3Cbutton%20type%3D%22submit%22%3ESubmit%3C%2Fbutton%3E%0A%3C%2Fform%3E%0A%3C%2Fdiv%3E" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Now let&apos;s go back to our Cat Photo App. This time, we&apos;ll style it using the popular Bootstrap responsive CSS framework.</p><p class="wrappable negative-10">Bootstrap will figure out how wide your screen is and respond by resizing your HTML elements - hence the name <code>Responsive Design</code>.</p><p class="wrappable negative-10">With responsive design, there is no need to design a mobile version of your website. It will look good on devices with screens of any width.</p><p class="wrappable negative-10">You can add Bootstrap to any app just by including it with <code>&lt;link rel=&quot;stylesheet&quot; href=&quot;//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css&quot;/&gt;</code> at the top of your HTML. But we&apos;ve added it for you to this page behind the scenes.</p><p class="wrappable negative-10">To get started, we should nest all of our HTML in a <code>div</code> element with the class <code>container-fluid</code>.</p><div class="negative-bottom-margin-30"></div>


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
<div class="container-fluid">
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
  <li>flea treatment</li>
  <li>thunder</li>
  <li>other cats</li>
</ol>
<form action="/submit-cat-photo">
  <label><input type="radio" name="indoor-outdoor"> Indoor</label>
  <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
  <label><input type="checkbox" name="personality"> Loving</label>
  <label><input type="checkbox" name="personality"> Lazy</label>
  <label><input type="checkbox" name="personality"> Crazy</label>
  <input type="text" placeholder="cat photo URL" required>
  <button type="submit">Submit</button>
</form>
</div>
```