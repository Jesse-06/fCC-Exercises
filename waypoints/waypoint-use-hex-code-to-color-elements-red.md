#Waypoint: Use Hex Code to Color Elements Red
<a href="http://freecodecamp.com/challenges/Waypoint:%20Use%20Hex%20Code%20to%20Color%20Elements%20Red?solution=%3Cstyle%3E%0A%20%20body%20%7B%0A%20%20%20%20background-color%3A%20%23FF0000%3B%0A%20%20%7D%0A%3C%2Fstyle%3E%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">You may be wondering why we use 6 digits to represent a color instead of just one or two. The answer is that using 6 digits gives us a huge variety.</p><p class="wrappable negative-10">How many colors are possible? 16 values and 6 positions means we have 16 to the 6th power, or more than 16 million possible colors.</p><p class="wrappable negative-10">Hex code follows the red-green-blue, or <code>rgb</code> format. The first two digits of hex code represent the amount of red in the color. The third and fourth digit represent the amount of green. The fifth and sixth represent the amount of blue.</p><p class="wrappable negative-10">So to get the absolute brightest red, you would just use <code>F</code> for the first and second digits (the highest possible value) and <code>0</code> for the third, fourth, fifth and sixth digits (the lowest possible value).</p><p class="wrappable negative-10">Make the <code>body</code> element&apos;s background color red by giving it the hex code value of <code>#FF0000</code>.</p><div class="negative-bottom-margin-30"></div>


####Answer:
```javascript
<style>
  body {
    background-color: #FF0000;
  }
</style>

```