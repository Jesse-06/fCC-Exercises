#Waypoint: Target Elements by ID Using jQuery
<a href="http://freecodecamp.com/challenges/Waypoint:%20Target%20Elements%20by%20ID%20Using%20jQuery?solution=fccss%0A%20%20%24(document).ready(function()%20%7B%0A%20%20%20%20%24(%22button%22).addClass(%22animated%20bounce%22)%3B%0A%20%20%20%20%24(%22.well%22).addClass(%22animated%20shake%22)%3B%0A%20%20%20%20%24(%22%23target3%22).addClass(%22animated%20fadeOut%22)%3B%0A%20%20%7D)%3B%0Afcces%0A%0A%3C!--%20You%20shouldn%27t%20need%20to%20modify%20code%20below%20this%20line%20--%3E%0A%0A%3Cdiv%20class%3D%22container-fluid%22%3E%0A%20%20%3Ch3%20class%3D%22text-primary%20text-center%22%3EjQuery%20Playground%3C%2Fh3%3E%0A%20%20%3Cdiv%20class%3D%22row%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22col-xs-6%22%3E%0A%20%20%20%20%20%20%3Ch4%3E%23left-well%3C%2Fh4%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22well%22%20id%3D%22left-well%22%3E%0A%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn%20btn-default%20target%22%20id%3D%22target1%22%3E%23target1%3C%2Fbutton%3E%0A%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn%20btn-default%20target%22%20id%3D%22target2%22%3E%23target2%3C%2Fbutton%3E%0A%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn%20btn-default%20target%22%20id%3D%22target3%22%3E%23target3%3C%2Fbutton%3E%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22col-xs-6%22%3E%0A%20%20%20%20%20%20%3Ch4%3E%23right-well%3C%2Fh4%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22well%22%20id%3D%22right-well%22%3E%0A%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn%20btn-default%20target%22%20id%3D%22target4%22%3E%23target4%3C%2Fbutton%3E%0A%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn%20btn-default%20target%22%20id%3D%22target5%22%3E%23target5%3C%2Fbutton%3E%0A%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn%20btn-default%20target%22%20id%3D%22target6%22%3E%23target6%3C%2Fbutton%3E%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Fdiv%3E%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">You can also target elements by their id attributes.</p><p class="wrappable negative-10">First target your <code>button</code> element with the id <code>target3</code> by using the <code>$(&quot;#target3&quot;)</code> selector.</p><p class="wrappable negative-10">Note that, just like with CSS declarations, you type a <code>#</code> before the id&apos;s name.</p><p class="wrappable negative-10">Then use jQuery&apos;s <code>.addClass()</code> function to add the classes <code>animated</code> and <code>fadeOut</code>.</p><p class="wrappable negative-10">Here&apos;s how you&apos;d make the <code>button</code> element with the id <code>target6</code> fade out: <code>$(&quot;#target6&quot;).addClass(&quot;animated fadeOut&quot;)</code>.</p><div class="negative-bottom-margin-30"></div>


####Answer:
```javascript
fccss
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
  });
fcces

<!-- You shouldn't need to modify code below this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>

```