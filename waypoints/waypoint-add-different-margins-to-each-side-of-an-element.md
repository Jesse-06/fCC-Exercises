#Waypoint: Add Different Margins to Each Side of an Element
<a href="http://freecodecamp.com/challenges/Waypoint:%20Add%20Different%20Margins%20to%20Each%20Side%20of%20an%20Element?solution=%3Cstyle%3E%0A%20%20.injected-text%20%7B%0A%20%20%20%20margin-bottom%3A%20-25px%3B%0A%20%20%20%20text-align%3A%20center%3B%0A%20%20%7D%0A%0A%20%20.box%20%7B%0A%20%20%20%20border-style%3A%20solid%3B%0A%20%20%20%20border-color%3A%20black%3B%0A%20%20%20%20border-width%3A%205px%3B%0A%20%20%20%20text-align%3A%20center%3B%0A%20%20%7D%0A%0A%20%20.yellow-box%20%7B%0A%20%20%20%20background-color%3A%20yellow%3B%0A%20%20%20%20padding%3A10px%3B%0A%20%20%7D%0A%20%20%0A%20%20.red-box%20%7B%0A%20%20%20%20background-color%3Ared%3B%0A%20%20%20%20margin-top%3A%2040px%3B%0A%20%20%20%20margin-right%3A%2020px%3B%0A%20%20%20%20margin-bottom%3A%2020px%3B%0A%20%20%20%20margin-left%3A%2040px%3B%0A%20%20%7D%0A%0A%20%20.green-box%20%7B%0A%20%20%20%20background-color%3A%20green%3B%0A%20%20%20%20margin%3A%2040px%2020px%2020px%2040px%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%3Ch5%20class%3D%22injected-text%22%3Emargin%3C%2Fh5%3E%0A%0A%3Cdiv%20class%3D%22box%20yellow-box%22%3E%0A%20%20%3Ch5%20class%3D%22box%20red-box%22%3Epadding%3C%2Fh5%3E%0A%20%20%3Ch5%20class%3D%22box%20green-box%22%3Epadding%3C%2Fh5%3E%0A%3C%2Fdiv%3E%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Give the green box a <code>margin</code> of <code>40px</code> on its top and left side, but only <code>20px</code> on its bottom and right side.</p><p class="wrappable negative-10">Sometimes you will want to customize an element so that it has a different <code>margin</code> on each of its sides.</p><p class="wrappable negative-10">CSS allows you to control the <code>margin</code> of an element on all four sides with <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code>, and <code>margin-left</code> properties.</p><div class="negative-bottom-margin-30"></div>


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
    padding:10px;
  }
  
  .red-box {
    background-color:red;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }

  .green-box {
    background-color: green;
    margin: 40px 20px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>

```