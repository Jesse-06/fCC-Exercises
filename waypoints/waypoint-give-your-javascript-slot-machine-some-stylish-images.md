#Waypoint: Give your JavaScript Slot Machine some Stylish Images
<a href="http://freecodecamp.com/challenges/Waypoint:%20Give%20your%20JavaScript%20Slot%20Machine%20some%20stylish%20images?solution=fccss%0A%20%20function%20runSlots()%7B%0A%20%20%20%20var%20slotOne%3B%0A%20%20%20%20var%20slotTwo%3B%0A%20%20%20%20var%20slotThree%3B%0A%20%20%20%20%0A%20%20%20%20var%20images%20%3D%20%5B%22http%3A%2F%2Fi.imgur.com%2F9H17QFk.png%22%2C%20%22http%3A%2F%2Fi.imgur.com%2F9RmpXTy.png%22%2C%20%22http%3A%2F%2Fi.imgur.com%2FVJnmtt5.png%22%5D%3B%0A%20%20%20%20%0A%20%20%20%20slotOne%20%3D%20Math.floor(Math.random()%20*%20(3%20-%201%20%2B%201))%20%2B%201%3B%0A%20%20%20%20slotTwo%20%3D%20Math.floor(Math.random()%20*%20(3%20-%201%20%2B%201))%20%2B%201%3B%0A%20%20%20%20slotThree%20%3D%20Math.floor(Math.random()%20*%20(3%20-%201%20%2B%201))%20%2B%201%3B%0A%20%20%20%20%0A%20%20%20%20%24(%27.logger%27).html(%27%27)%3B%0A%20%20%20%20%24(%27.logger%27).html(%27Not%20A%20Win%27)%3B%0A%20%20%20%20%0A%20%20%20%20%2F%2F%20Only%20change%20code%20below%20this%20line.%0A%20%20%20%20%24(%24(%27.slot%27)%5B0%5D).html(%27%3Cimg%20src%20%3D%20%22%27%20%2B%20images%5BslotOne-1%5D%20%2B%20%27%22%3E%27)%3B%0A%20%20%20%20%24(%24(%27.slot%27)%5B1%5D).html(%27%3Cimg%20src%20%3D%20%22%27%20%2B%20images%5BslotTwo-1%5D%20%2B%20%27%22%3E%27)%3B%0A%20%20%20%20%24(%24(%27.slot%27)%5B2%5D).html(%27%3Cimg%20src%20%3D%20%22%27%20%2B%20images%5BslotThree-1%5D%20%2B%20%27%22%3E%27)%3B%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%2F%2F%20Only%20change%20code%20above%20this%20line.%0A%20%20%20%20%0A%20%20%20%20if(slotOne%20!%3D%3D%20slotTwo%20%7C%7C%20slotTwo%20!%3D%3D%20slotThree)%7B%0A%20%20%20%20%20%20return%20null%3B%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20if(slotOne%20!%3D%3D%20undefined%20%26%26%20slotTwo%20!%3D%3D%20undefined%20%26%26%20slotThree%20!%3D%3D%20undefined)%7B%0A%20%20%20%20%20%20%24(%27.logger%27).html(slotOne)%3B%0A%20%20%20%20%20%20%24(%27.logger%27).append(%27%20%27%20%2B%20slotTwo)%3B%0A%20%20%20%20%20%20%24(%27.logger%27).append(%27%20%27%20%2B%20slotThree)%3B%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20return%20%5BslotOne%2C%20slotTwo%2C%20slotThree%5D%3B%0A%20%20%7D%0A%0A%20%20%24(document).ready(function()%7B%0A%20%20%20%20%20%24(%27.go%27).click(function()%7B%0A%20%20%20%20%20%20%20runSlots()%3B%0A%20%20%20%20%20%7D)%3B%0A%20%20%20%7D)%3B%0Afcces%0A%20%0A%3Cdiv%3E%0A%20%3Cdiv%20class%20%3D%20%27container%20inset%27%3E%0A%20%20%20%3Cdiv%20class%20%3D%20%27header%20inset%27%3E%0A%20%20%20%20%20%3Cimg%20src%3D%27https%3A%2F%2Fs3.amazonaws.com%2Ffreecodecamp%2Ffreecodecamp_logo.svg.gz%27%20alt%3D%27learn%20to%20code%20javascript%20at%20Free%20Code%20Camp%20logo%27%20class%3D%27img-responsive%20nav-logo%27%3E%0A%20%20%20%20%20%3Ch2%3EFCC%20Slot%20Machine%3C%2Fh2%3E%0A%20%20%20%3C%2Fdiv%3E%0A%20%20%20%3Cdiv%20class%20%3D%20%27slots%20inset%27%3E%0A%20%20%20%20%20%3Cdiv%20class%20%3D%20%27slot%20inset%27%3E%0A%20%20%20%20%20%20%20%0A%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%3Cdiv%20class%20%3D%20%27slot%20inset%27%3E%0A%20%20%20%20%20%20%20%0A%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%3Cdiv%20class%20%3D%20%27slot%20inset%27%3E%0A%20%20%20%20%20%20%20%0A%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%3C%2Fdiv%3E%0A%20%20%20%3Cbr%2F%3E%0A%20%20%20%3Cdiv%20class%20%3D%20%27outset%27%3E%0A%20%20%20%20%20%3Cbutton%20class%20%3D%20%27go%20inset%27%3E%0A%20%20%20%20%20%20%20Go%0A%20%20%20%20%20%3C%2Fbutton%3E%0A%20%20%20%3C%2Fdiv%3E%0A%20%20%20%3Cbr%2F%3E%0A%20%20%20%3Cdiv%20class%20%3D%20%27foot%20inset%27%3E%0A%20%20%20%20%20%3Cspan%20class%20%3D%20%27logger%27%3E%3C%2Fspan%3E%0A%20%20%20%3C%2Fdiv%3E%0A%20%3C%2Fdiv%3E%0A%3C%2Fdiv%3E%0A%0A%3Cstyle%3E%0A%20.slot%20%3E%20img%20%7B%0A%20%20margin%3A%200!important%3B%0A%20%20height%3A%2071px%3B%0A%20%20width%3A%2050px%3B%0A%20%7D%0A%20.container%20%7B%0A%20%20%20background-color%3A%20%234a2b0f%3B%0A%20%20%20height%3A%20400px%3B%0A%20%20%20width%3A%20260px%3B%0A%20%20%20margin%3A%2050px%20auto%3B%0A%20%20%20border-radius%3A%204px%3B%0A%20%7D%0A%20.header%20%7B%0A%20%20%20border%3A%202px%20solid%20%23fff%3B%0A%20%20%20border-radius%3A%204px%3B%0A%20%20%20height%3A%2055px%3B%0A%20%20%20margin%3A%2014px%20auto%3B%0A%20%20%20background-color%3A%20%23457f86%0A%20%7D%0A%20.header%20h2%20%7B%0A%20%20%20height%3A%2030px%3B%0A%20%20%20margin%3A%20auto%3B%0A%20%7D%0A%20.header%20h2%20%7B%0A%20%20%20font-size%3A%2014px%3B%0A%20%20%20margin%3A%200%200%3B%0A%20%20%20padding%3A%200%3B%0A%20%20%20color%3A%20%23fff%3B%0A%20%20%20text-align%3A%20center%3B%0A%20%7D%0A%20.slots%7B%0A%20%20%20display%3A%20flex%3B%0A%20%20%20background-color%3A%20%23457f86%3B%0A%20%20%20border-radius%3A%206px%3B%0A%20%20%20border%3A%202px%20solid%20%23fff%3B%0A%20%7D%0A%20.slot%7B%0A%20%20%20flex%3A%201%200%20auto%3B%0A%20%20%20background%3A%20white%3B%0A%20%20%20height%3A%2075px%3B%0A%20%20%20width%3A%2050px%3B%0A%20%20%20margin%3A%208px%3B%0A%20%20%20border%3A%202px%20solid%20%23215f1e%3B%0A%20%20%20border-radius%3A%204px%3B%0A%20%20%20text-align%3A%20center%3B%0A%20%7D%0A%20.go%20%7B%0A%20%20%20width%3A%20100%25%3B%0A%20%20%20color%3A%20%23fff%3B%0A%20%20%20background-color%3A%20%23457f86%3B%0A%20%20%20border%3A%202px%20solid%20%23fff%3B%0A%20%20%20border-radius%3A%202px%3B%0A%20%20%20box-sizing%3A%20none%3B%0A%20%20%20outline%3A%20none!important%3B%0A%20%7D%0A%20.foot%20%7B%0A%20%20%20height%3A%20150px%3B%0A%20%20%20background-color%3A%20457f86%3B%0A%20%20%20border%3A%202px%20solid%20%23fff%3B%0A%20%7D%0A%20%0A%20.logger%20%7B%0A%20%20%20color%3A%20white%3B%0A%20%20%20margin%3A%2010px%3B%0A%20%7D%0A%20%0A%20.outset%20%7B%0A%20%20%20-webkit-box-shadow%3A%200px%200px%2015px%20-2px%20rgba(0%2C0%2C0%2C0.75)%3B%0A%20%20%20-moz-box-shadow%3A%200px%200px%2015px%20-2px%20rgba(0%2C0%2C0%2C0.75)%3B%0A%20%20%20%20%20box-shadow%3A%200px%200px%2015px%20-2px%20rgba(0%2C0%2C0%2C0.75)%3B%0A%20%7D%0A%20%0A%20.inset%20%7B%0A%20%20%20-webkit-box-shadow%3A%20inset%200px%200px%2015px%20-2px%20rgba(0%2C0%2C0%2C0.75)%3B%0A%20%20%20-moz-box-shadow%3A%20inset%200px%200px%2015px%20-2px%20rgba(0%2C0%2C0%2C0.75)%3B%0A%20%20%20box-shadow%3A%20inset%200px%200px%2015px%20-2px%20rgba(0%2C0%2C0%2C0.75)%3B%0A%20%7D%0A%3C%2Fstyle%3E%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Now let&apos;s add some images to our slots.</p><p class="wrappable negative-10">We&apos;ve already set up the images for you in an array called <code>images</code>. We can use different indexes to grab each of these.</p><p class="wrappable negative-10">Here&apos;s how we would set the first slot to show a different image depending on which number its random number generates:</p><p class="wrappable negative-10"><code>$($(&apos;.slot&apos;)[0]).html(&apos;&lt;img src = &quot;&apos; + images[slotOne-1] + &apos;&quot;&gt;&apos;);</code></p><p class="wrappable negative-10">Set up all three slots like this, then click the &quot;Go&quot; button to play the slot machine.</p><div class="negative-bottom-margin-30"></div>


####Answer:
```javascript
fccss
  function runSlots(){
    var slotOne;
    var slotTwo;
    var slotThree;
    
    var images = ["http://i.imgur.com/9H17QFk.png", "http://i.imgur.com/9RmpXTy.png", "http://i.imgur.com/VJnmtt5.png"];
    
    slotOne = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    slotTwo = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    slotThree = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    
    $('.logger').html('');
    $('.logger').html('Not A Win');
    
    // Only change code below this line.
    $($('.slot')[0]).html('<img src = "' + images[slotOne-1] + '">');
    $($('.slot')[1]).html('<img src = "' + images[slotTwo-1] + '">');
    $($('.slot')[2]).html('<img src = "' + images[slotThree-1] + '">');    
    
    // Only change code above this line.
    
    if(slotOne !== slotTwo || slotTwo !== slotThree){
      return null;
    }
    
    if(slotOne !== undefined && slotTwo !== undefined && slotThree !== undefined){
      $('.logger').html(slotOne);
      $('.logger').append(' ' + slotTwo);
      $('.logger').append(' ' + slotThree);
    }
    
    return [slotOne, slotTwo, slotThree];
  }

  $(document).ready(function(){
     $('.go').click(function(){
       runSlots();
     });
   });
fcces
 
<div>
 <div class = 'container inset'>
   <div class = 'header inset'>
     <img src='https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg.gz' alt='learn to code javascript at Free Code Camp logo' class='img-responsive nav-logo'>
     <h2>FCC Slot Machine</h2>
   </div>
   <div class = 'slots inset'>
     <div class = 'slot inset'>
       
     </div>
     <div class = 'slot inset'>
       
     </div>
     <div class = 'slot inset'>
       
     </div>
   </div>
   <br/>
   <div class = 'outset'>
     <button class = 'go inset'>
       Go
     </button>
   </div>
   <br/>
   <div class = 'foot inset'>
     <span class = 'logger'></span>
   </div>
 </div>
</div>

<style>
 .slot > img {
  margin: 0!important;
  height: 71px;
  width: 50px;
 }
 .container {
   background-color: #4a2b0f;
   height: 400px;
   width: 260px;
   margin: 50px auto;
   border-radius: 4px;
 }
 .header {
   border: 2px solid #fff;
   border-radius: 4px;
   height: 55px;
   margin: 14px auto;
   background-color: #457f86
 }
 .header h2 {
   height: 30px;
   margin: auto;
 }
 .header h2 {
   font-size: 14px;
   margin: 0 0;
   padding: 0;
   color: #fff;
   text-align: center;
 }
 .slots{
   display: flex;
   background-color: #457f86;
   border-radius: 6px;
   border: 2px solid #fff;
 }
 .slot{
   flex: 1 0 auto;
   background: white;
   height: 75px;
   width: 50px;
   margin: 8px;
   border: 2px solid #215f1e;
   border-radius: 4px;
   text-align: center;
 }
 .go {
   width: 100%;
   color: #fff;
   background-color: #457f86;
   border: 2px solid #fff;
   border-radius: 2px;
   box-sizing: none;
   outline: none!important;
 }
 .foot {
   height: 150px;
   background-color: 457f86;
   border: 2px solid #fff;
 }
 
 .logger {
   color: white;
   margin: 10px;
 }
 
 .outset {
   -webkit-box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.75);
   -moz-box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.75);
     box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.75);
 }
 
 .inset {
   -webkit-box-shadow: inset 0px 0px 15px -2px rgba(0,0,0,0.75);
   -moz-box-shadow: inset 0px 0px 15px -2px rgba(0,0,0,0.75);
   box-shadow: inset 0px 0px 15px -2px rgba(0,0,0,0.75);
 }
</style>

```