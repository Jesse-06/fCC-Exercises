#Waypoint: Use Clockwise Notation to Specify the Padding of an Element
<a href="http://freecodecamp.com/challenges/Waypoint:%20Use%20Clockwise%20Notation%20to%20Specify%20the%20Padding%20of%20an%20Element?solution=%3Cstyle%3E%0A%20%20.injected-text%20%7B%0A%20%20%20%20margin-bottom%3A%20-25px%3B%0A%20%20%20%20text-align%3A%20center%3B%0A%20%20%7D%0A%0A%20%20.box%20%7B%0A%20%20%20%20border-style%3A%20solid%3B%0A%20%20%20%20border-color%3A%20black%3B%0A%20%20%20%20border-width%3A%205px%3B%0A%20%20%20%20text-align%3A%20center%3B%0A%20%20%7D%0A%0A%20%20.yellow-box%20%7B%0A%20%20%20%20background-color%3A%20yellow%3B%0A%20%20%20%20padding%3A%2020px%2040px%2020px%2040px%3B%0A%20%20%7D%0A%20%20%0A%20%20.red-box%20%7B%0A%20%20%20%20background-color%3Ared%3B%0A%20%20%20%20padding%3A%2020px%2040px%2020px%2040px%3B%0A%20%20%7D%0A%0A%20%20.green-box%20%7B%0A%20%20%20%20background-color%3A%20green%3B%0A%20%20%20%20padding%3A%2040px%2020px%2020px%2040px%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%3Ch5%20class%3D%22injected-text%22%3Emargin%3C%2Fh5%3E%0A%0A%3Cdiv%20class%3D%22box%20yellow-box%22%3E%0A%20%20%3Ch5%20class%3D%22box%20red-box%22%3Epadding%3C%2Fh5%3E%0A%20%20%3Ch5%20class%3D%22box%20green-box%22%3Epadding%3C%2Fh5%3E%0A%3C%2Fdiv%3E%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Instead of specifying an element&apos;s <code>padding-top</code>, <code>padding-right</code>, <code>padding-bottom</code>, and <code>padding-left</code> properties, you can specify them all in one line, like this: <code>padding: 10px 20px 10px 20px;</code>.</p><p class="wrappable negative-10">These four values work like a clock: top, right, bottom, left, and will produce the exact same result as using the side-specific padding instructions.</p><p class="wrappable negative-10">Use Clockwise Notation to give the &quot;.green-box&quot; class a <code>padding</code> of <code>40px</code> on its top and left side, but only <code>20px</code> on its bottom and right side.</p><div class="negative-bottom-margin-30"></div>


####Answer:
```javascript
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }
  
  .red-box {
    background-color:red;
    padding: 20px 40px 20px 40px;
  }

  .green-box {
    background-color: green;
    padding: 40px 20px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>

```