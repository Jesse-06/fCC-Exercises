#Waypoint: Add a Negative Margin to an Element
<a href="http://freecodecamp.com/challenges/Waypoint:%20Add%20a%20Negative%20Margin%20to%20an%20Element?solution=%3Cstyle%3E%0A%20%20.injected-text%20%7B%0A%20%20%20%20margin-bottom%3A%20-25px%3B%0A%20%20%20%20text-align%3A%20center%3B%0A%20%20%7D%0A%0A%20%20.box%20%7B%0A%20%20%20%20border-style%3A%20solid%3B%0A%20%20%20%20border-color%3A%20black%3B%0A%20%20%20%20border-width%3A%205px%3B%0A%20%20%20%20text-align%3A%20center%3B%0A%20%20%7D%0A%0A%20%20.yellow-box%20%7B%0A%20%20%20%20background-color%3A%20yellow%3B%0A%20%20%20%20padding%3A10px%3B%0A%20%20%7D%0A%20%20%0A%20%20.red-box%20%7B%0A%20%20%20%20background-color%3Ared%3B%0A%20%20%20%20padding%3A%2020px%3B%0A%20%20%20%20margin%3A%20-15px%3B%0A%20%20%7D%0A%0A%20%20.green-box%20%7B%0A%20%20%20%20background-color%3A%20green%3B%0A%20%20%20%20padding%3A%2020px%3B%0A%20%20%20%20margin%3A%20-15px%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A%0A%3Cdiv%20class%3D%22box%20yellow-box%22%3E%0A%20%20%3Ch5%20class%3D%22box%20red-box%22%3Epadding%3C%2Fh5%3E%0A%20%20%3Ch5%20class%3D%22box%20green-box%22%3Epadding%3C%2Fh5%3E%0A%3C%2Fdiv%3E%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">An element&apos;s <code>margin</code> controls the amount of space between an element&apos;s <code>border</code> and surrounding elements.</p><p class="wrappable negative-10">If you set an element&apos;s <code>margin</code> to a negative value, the element will grow larger.</p><p class="wrappable negative-10">Try to set the <code>margin</code> to a negative value like the one for the red box.</p><p class="wrappable negative-10">Change the <code>margin</code> of the green box to <code>-15px</code>, so it fills the entire horizontal width of the yellow box around it.</p><div class="negative-bottom-margin-30"></div>


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
    padding: 20px;
    margin: -15px;
  }

  .green-box {
    background-color: green;
    padding: 20px;
    margin: -15px;
  }
</style>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>

```