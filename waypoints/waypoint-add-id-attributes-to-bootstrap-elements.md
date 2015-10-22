#Waypoint: Add ID Attributes to Bootstrap Elements
<a href="http://freecodecamp.com/challenges/Waypoint:%20Add%20ID%20Attributes%20to%20Bootstrap%20Elements?solution=%3Cdiv%20class%3D%22container-fluid%22%3E%0A%20%20%3Ch3%20class%3D%22text-primary%20text-center%22%3EjQuery%20Playground%3C%2Fh3%3E%0A%20%20%3Cdiv%20class%3D%22row%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22col-xs-6%22%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22well%22%20id%3D%22left-well%22%3E%0A%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn%20btn-default%20target%22%3E%3C%2Fbutton%3E%0A%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn%20btn-default%20target%22%3E%3C%2Fbutton%3E%0A%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn%20btn-default%20target%22%3E%3C%2Fbutton%3E%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22col-xs-6%22%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22well%22%20id%3D%22right-well%22%3E%0A%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn%20btn-default%20target%22%3E%3C%2Fbutton%3E%0A%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn%20btn-default%20target%22%3E%3C%2Fbutton%3E%0A%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn%20btn-default%20target%22%3E%3C%2Fbutton%3E%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Fdiv%3E%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Recall that in addition to class attributes, you can give each of your elements an <code>id</code> attribute.</p><p class="wrappable negative-10">Each id should be unique to a specific element.</p><p class="wrappable negative-10">Let&apos;s give a unique id to each of our <code>div</code> elements of class <code>well</code>.</p><p class="wrappable negative-10">Remember that you can give an element an id like this: <code>&lt;div class=&quot;well&quot; id=&quot;center-well&quot;&gt;</code></p><p class="wrappable negative-10">Give the well on the left the id of <code>left-well</code>. Give the well on the right the <code>id</code> of <code>right-well</code>.</p><div class="negative-bottom-margin-30"></div>


####Answer:
```javascript
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well" id="left-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well" id="right-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
  </div>
</div>

```