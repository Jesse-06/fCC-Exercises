#Waypoint: Give Each Element a Unique ID
<a href="http://freecodecamp.com/challenges/Waypoint:%20Give%20Each%20Element%20a%20Unique%20ID?solution=%3Cdiv%20class%3D%22container-fluid%22%3E%0A%20%20%3Ch3%20class%3D%22text-primary%20text-center%22%3EjQuery%20Playground%3C%2Fh3%3E%0A%20%20%3Cdiv%20class%3D%22row%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22col-xs-6%22%3E%0A%20%20%20%20%20%20%3Ch4%3E%23left-well%3C%2Fh4%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22well%22%20id%3D%22left-well%22%3E%0A%20%20%20%20%20%20%20%20%3Cbutton%20id%3D%22target1%22%20class%3D%22btn%20btn-default%20target%22%3E%3C%2Fbutton%3E%0A%20%20%20%20%20%20%20%20%3Cbutton%20id%3D%22target2%22%20class%3D%22btn%20btn-default%20target%22%3E%3C%2Fbutton%3E%0A%20%20%20%20%20%20%20%20%3Cbutton%20id%3D%22target3%22%20class%3D%22btn%20btn-default%20target%22%3E%3C%2Fbutton%3E%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22col-xs-6%22%3E%0A%20%20%20%20%20%20%3Ch4%3E%23right-well%3C%2Fh4%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22well%22%20id%3D%22right-well%22%3E%0A%20%20%20%20%20%20%20%20%3Cbutton%20id%3D%22target4%22%20class%3D%22btn%20btn-default%20target%22%3E%3C%2Fbutton%3E%0A%20%20%20%20%20%20%20%20%3Cbutton%20id%3D%22target5%22%20class%3D%22btn%20btn-default%20target%22%3E%3C%2Fbutton%3E%0A%20%20%20%20%20%20%20%20%3Cbutton%20id%3D%22target6%22%20class%3D%22btn%20btn-default%20target%22%3E%3C%2Fbutton%3E%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Fdiv%3E%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">We will also want to be able to use jQuery to target each button by its unique id.</p><p class="wrappable negative-10">Give each of your buttons a unique id like, starting with <code>target1</code> and ending with <code>target6</code>.</p><div class="negative-bottom-margin-30"></div>


####Answer:
```javascript
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button id="target1" class="btn btn-default target"></button>
        <button id="target2" class="btn btn-default target"></button>
        <button id="target3" class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button id="target4" class="btn btn-default target"></button>
        <button id="target5" class="btn btn-default target"></button>
        <button id="target6" class="btn btn-default target"></button>
      </div>
    </div>
  </div>
</div>

```