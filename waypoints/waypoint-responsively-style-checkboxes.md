#Waypoint: Responsively Style Checkboxes
<a href="http://freecodecamp.com/challenges/Waypoint:%20Responsively%20Style%20Checkboxes?solution=%3Clink%20href%3D%22http%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DLobster%22%20rel%3D%22stylesheet%22%20type%3D%22text%2Fcss%22%3E%0A%3Cstyle%3E%0A%20%20h2%20%7B%0A%20%20%20%20font-family%3A%20Lobster%2C%20Monospace%3B%0A%20%20%7D%0A%0A%20%20.thick-green-border%20%7B%0A%20%20%20%20border-color%3A%20green%3B%0A%20%20%20%20border-width%3A%2010px%3B%0A%20%20%20%20border-style%3A%20solid%3B%0A%20%20%20%20border-radius%3A%2050%25%3B%0A%20%20%7D%0A%0A%3C%2Fstyle%3E%0A%0A%3Cdiv%20class%3D%22container-fluid%22%3E%0A%20%20%3Cdiv%20class%3D%22row%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22col-xs-8%22%3E%0A%20%20%20%20%20%20%3Ch2%20class%3D%22text-primary%20text-center%22%3ECatPhotoApp%3C%2Fh2%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22col-xs-4%22%3E%0A%20%20%20%20%20%20%3Ca%20href%3D%22%23%22%3E%3Cimg%20class%3D%22img-responsive%20thick-green-border%22%20src%3D%22https%3A%2F%2Fbit.ly%2Ffcc-relaxing-cat%22%3E%3C%2Fa%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cimg%20src%3D%22http%3A%2F%2Fbit.ly%2Ffcc-running-cats%22%20class%3D%22img-responsive%22%3E%0A%20%20%3Cdiv%20class%3D%22row%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22col-xs-4%22%3E%0A%20%20%20%20%20%20%3Cbutton%20class%3D%22btn%20btn-block%20btn-primary%22%3E%3Ci%20class%3D%22fa%20fa-thumbs-up%22%3E%3C%2Fi%3E%20Like%3C%2Fbutton%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22col-xs-4%22%3E%0A%20%20%20%20%20%20%3Cbutton%20class%3D%22btn%20btn-block%20btn-info%22%3E%3Ci%20class%3D%22fa%20fa-info-circle%22%3E%3C%2Fi%3E%20Info%3C%2Fbutton%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22col-xs-4%22%3E%0A%20%20%20%20%20%20%3Cbutton%20class%3D%22btn%20btn-block%20btn-danger%22%3E%3Ci%20class%3D%22fa%20fa-trash%22%3E%3C%2Fi%3E%20Delete%3C%2Fbutton%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cp%3EThings%20cats%20%3Cspan%20class%3D%22text-danger%22%3Elove%3A%3C%2Fspan%3E%3C%2Fp%3E%0A%20%20%3Cul%3E%0A%20%20%20%20%3Cli%3Ecat%20nip%3C%2Fli%3E%0A%20%20%20%20%3Cli%3Elaser%20pointers%3C%2Fli%3E%0A%20%20%20%20%3Cli%3Elasagna%3C%2Fli%3E%0A%20%20%3C%2Ful%3E%0A%20%20%3Cp%3ETop%203%20things%20cats%20hate%3A%3C%2Fp%3E%0A%20%20%3Col%3E%0A%20%20%20%20%3Cli%3Eflea%20treatment%3C%2Fli%3E%0A%20%20%20%20%3Cli%3Ethunder%3C%2Fli%3E%0A%20%20%20%20%3Cli%3Eother%20cats%3C%2Fli%3E%0A%20%20%3C%2Fol%3E%0A%20%20%3Cform%20action%3D%22%2Fsubmit-cat-photo%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22row%22%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22col-xs-6%22%3E%0A%20%20%20%20%20%20%20%20%3Clabel%3E%3Cinput%20type%3D%22radio%22%20name%3D%22indoor-outdoor%22%3E%20Indoor%3C%2Flabel%3E%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22col-xs-6%22%3E%0A%20%20%20%20%20%20%20%20%3Clabel%3E%3Cinput%20type%3D%22radio%22%20name%3D%22indoor-outdoor%22%3E%20Outdoor%3C%2Flabel%3E%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22row%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22col-xs-4%22%3E%3Clabel%3E%3Cinput%20type%3D%22checkbox%22%20name%3D%22personality%22%3E%20Loving%3C%2Flabel%3E%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22col-xs-4%22%3E%3Clabel%3E%3Cinput%20type%3D%22checkbox%22%20name%3D%22personality%22%3E%20Lazy%3C%2Flabel%3E%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22col-xs-4%22%3E%3Clabel%3E%3Cinput%20type%3D%22checkbox%22%20name%3D%22personality%22%3E%20Crazy%3C%2Flabel%3E%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cinput%20type%3D%22text%22%20placeholder%3D%22cat%20photo%20URL%22%20required%3E%0A%20%20%20%20%3Cbutton%20type%3D%22submit%22%3ESubmit%3C%2Fbutton%3E%0A%20%20%3C%2Fform%3E%0A%3C%2Fdiv%3E%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">You can use Bootstrap&apos;s <code>col-xs-*</code> classes on <code>form</code> elements, too! This way, our checkboxes will be evenly spread out across the page, regardless of how wide the screen resolution is.</p><p class="wrappable negative-10">Nest all your checkboxes in a <code>&lt;div class=&quot;row&quot;&gt;</code> element. Then nest each of them in a <code>&lt;div class=&quot;col-xs-4&quot;&gt;</code> element.</p><div class="negative-bottom-margin-30"></div>


####Answer:
```javascript
<link href="http://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

</style>

<div class="container-fluid">
  <div class="row">
    <div class="col-xs-8">
      <h2 class="text-primary text-center">CatPhotoApp</h2>
    </div>
    <div class="col-xs-4">
      <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat"></a>
    </div>
  </div>
  <img src="http://bit.ly/fcc-running-cats" class="img-responsive">
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary"><i class="fa fa-thumbs-up"></i> Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info"><i class="fa fa-info-circle"></i> Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger"><i class="fa fa-trash"></i> Delete</button>
    </div>
  </div>
  <p>Things cats <span class="text-danger">love:</span></p>
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
    <div class="row">
      <div class="col-xs-6">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
      </div>
      <div class="col-xs-6">
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
      </div>
    </div>
    <div class="row">
    <div class="col-xs-4"><label><input type="checkbox" name="personality"> Loving</label></div>
    <div class="col-xs-4"><label><input type="checkbox" name="personality"> Lazy</label></div>
      <div class="col-xs-4"><label><input type="checkbox" name="personality"> Crazy</label></div>
    </div>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</div>

```