#Waypoint: Target Even Numbered Elements Using jQuery
<a href="http://freecodecamp.com/challenges/Waypoint:%20Target%20Even%20Numbered%20Elements%20Using%20jQuery?solution=fccss%0A%20%20%24(document).ready(function()%20%7B%0A%20%20%20%20%24(%22%23target1%22).css(%22color%22%2C%20%22red%22)%3B%0A%20%20%20%20%24(%22%23target1%22).prop(%22disabled%22%2C%20true)%3B%0A%20%20%20%20%24(%22%23target4%22).remove()%3B%0A%20%20%20%20%24(%22%23target2%22).appendTo(%22%23right-well%22)%3B%0A%20%20%20%20%24(%22%23target5%22).clone().appendTo(%22%23left-well%22)%3B%0A%20%20%20%20%24(%22%23target1%22).parent().css(%22background-color%22%2C%20%22red%22)%3B%0A%20%20%20%20%24(%22%23right-well%22).children().css(%22color%22%2C%20%22green%22)%3B%0A%20%20%20%20%24(%22%23left-well%22).children().css(%22color%22%2C%20%22green%22)%3B%0A%20%20%20%20%24(%22.target%3Anth-child(2)%22).addClass(%22animated%20bounce%22)%3B%0A%24(%22.target%3Aeven%22).addClass(%22animated%20shake%22)%3B%0A%20%20%7D)%3B%0Afcces%0A%0A%3C!--%20You%20shouldn%27t%20need%20to%20modify%20code%20below%20this%20line%20--%3E%0A%0A%3Cdiv%20class%3D%22container-fluid%22%3E%0A%20%20%3Ch3%20class%3D%22text-primary%20text-center%22%3EjQuery%20Playground%3C%2Fh3%3E%0A%20%20%3Cdiv%20class%3D%22row%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22col-xs-6%22%3E%0A%20%20%20%20%20%20%3Ch4%3E%23left-well%3C%2Fh4%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22well%22%20id%3D%22left-well%22%3E%0A%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn%20btn-default%20target%22%20id%3D%22target1%22%3E%23target1%3C%2Fbutton%3E%0A%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn%20btn-default%20target%22%20id%3D%22target2%22%3E%23target2%3C%2Fbutton%3E%0A%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn%20btn-default%20target%22%20id%3D%22target3%22%3E%23target3%3C%2Fbutton%3E%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22col-xs-6%22%3E%0A%20%20%20%20%20%20%3Ch4%3E%23right-well%3C%2Fh4%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22well%22%20id%3D%22right-well%22%3E%0A%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn%20btn-default%20target%22%20id%3D%22target4%22%3E%23target4%3C%2Fbutton%3E%0A%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn%20btn-default%20target%22%20id%3D%22target5%22%3E%23target5%3C%2Fbutton%3E%0A%20%20%20%20%20%20%20%20%3Cbutton%20class%3D%22btn%20btn-default%20target%22%20id%3D%22target6%22%3E%23target6%3C%2Fbutton%3E%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Fdiv%3E%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">You can also target all the even-numbered elements.</p><p class="wrappable negative-10">Here&apos;s how you would target all the odd-numbered elements with class <code>target</code> and give them classes: <code>$(&quot;.target:odd&quot;).addClass(&quot;animated shake&quot;);</code></p><p class="wrappable negative-10">Note that jQuery is zero-indexed, meaning that, counter-intuitively, <code>:odd</code> selects the second element, fourth element, and so on.</p><p class="wrappable negative-10">Try selecting all the even-numbered elements - that is, what your browser will consider even-numbered elements - and giving them the classes of <code>animated</code> and <code>shake</code>.</p><div class="negative-bottom-margin-30"></div>


####Answer:
```javascript
fccss
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "green");
    $("#left-well").children().css("color", "green");
    $(".target:nth-child(2)").addClass("animated bounce");
$(".target:even").addClass("animated shake");
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