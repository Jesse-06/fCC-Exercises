#Bonfire: Sum All Primes
<a href="http://freecodecamp.com/challenges/Bonfire:%20Sum%20All%20Primes?solution=function%20sumPrimes(num)%20%7B%0A%20%20%0A%20%20if%20(num%20%3C%202)%20return%20num%3B%0A%20%20%0A%20%20var%20mark%20%3D%20%5B%5D%3B%0A%20%20var%20primes%20%3D%20%5B%5D%3B%0A%0A%20%20%2F*%20%0A%20%20*%20Sieve%20of%20Eratosthenes%20algorithm%3A%0A%20%20*%20%20%20-%20Create%20a%20list%20of%20consecutive%20integers%20from%202%20through%20n%3A%20(2%2C%203%2C%204%2C%20...%2C%20n).%0A%20%20*%20%20%20-%20Initially%2C%20let%20p%20equal%202%2C%20the%20first%20prime%20number.%0A%20%20*%20%20%20-%20Starting%20from%20p%2C%20enumerate%20its%20multiples%20by%20counting%20to%20n%20in%20increments%20of%20p%2C%20and%20mark%20them%20in%20the%20list%20(these%20will%20be%202p%2C%203p%2C%204p%2C%20...%20%3B%20the%20p%20itself%20should%20not%20be%20marked).%0A%20%20*%20%20%20-%20Find%20the%20first%20number%20greater%20than%20p%20in%20the%20list%20that%20is%20not%20marked.%20If%20there%20was%20no%20such%20number%2C%20stop.%20Otherwise%2C%20let%20p%20now%20equal%20this%20new%20number%20(which%20is%20the%20next%20prime)%2C%20and%20repeat%20from%20step%203.%0A%20%20*%20%20%20-%20When%20the%20algorithm%20terminates%2C%20the%20numbers%20remaining%20not%20marked%20in%20the%20list%20are%20all%20the%20primes%20below%20n.%0A%20%20*%2F%0A%20%20%0A%20%20for%20(i%20%3D%202%3B%20i%20%3C%3D%20num%3B%20i%2B%2B)%20%7B%0A%0A%20%20%20%20if%20(!mark%5Bi%5D)%20%7B%0A%20%20%0A%20%20%20%20%20%20%2F%2F%20i%20has%20not%20been%20marked%20--%20it%20is%20prime%0A%20%20%20%20%20%20primes.push(i)%3B%0A%20%20%0A%20%20%20%20%20%20for%20(j%20%3D%20i*i%3B%20j%20%3C%3D%20num%3B%20j%20%2B%3D%20i)%20%7B%0A%20%20%20%20%20%20%20%20mark%5Bj%5D%20%3D%20true%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%0A%20%20%2F%2Fadd%20all%20numbers%20in%20the%20primes%20array%0A%20%20primes%20%3D%20primes.reduce(function(previousValue%2C%20currentValue%2C%20index%2C%20array)%20%7B%0A%20%20%20%20return%20previousValue%20%2B%20currentValue%3B%0A%20%20%7D)%3B%0A%20%20%0A%20%20return%20primes%3B%0A%20%20%0A%7D%0A%0AsumPrimes(10)%3B%0A" target="_blank">Click here</a> to see the solution on the freeCodeCamp website.


####Instructions:
<p class="wrappable negative-10">Sum all the prime numbers up to and including the provided number.</p><p class="wrappable negative-10">A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it&apos;s only divisible by 1 and 2. 1 isn&apos;t a prime number, because it&apos;s only divisible by itself.</p><p class="wrappable negative-10">The provided number may not be a prime.</p><p class="wrappable negative-10">Remember to use <a href="//github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck" target="_blank">Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.</p><div class="negative-30-bottom"><div id="MDN-links"><p class="negative-10">Here are some helpful links:</p><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for" target="_blank">For Loops</a></li></ul></div><div class="negative-10"><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push" target="_blank">Array.push()</a></li></ul></div></div></div>


####Answer:
```javascript
function sumPrimes(num) {
  
  if (num < 2) return num;
  
  var mark = [];
  var primes = [];

  /* 
  * Sieve of Eratosthenes algorithm:
  *   - Create a list of consecutive integers from 2 through n: (2, 3, 4, ..., n).
  *   - Initially, let p equal 2, the first prime number.
  *   - Starting from p, enumerate its multiples by counting to n in increments of p, and mark them in the list (these will be 2p, 3p, 4p, ... ; the p itself should not be marked).
  *   - Find the first number greater than p in the list that is not marked. If there was no such number, stop. Otherwise, let p now equal this new number (which is the next prime), and repeat from step 3.
  *   - When the algorithm terminates, the numbers remaining not marked in the list are all the primes below n.
  */
  
  for (i = 2; i <= num; i++) {

    if (!mark[i]) {
  
      // i has not been marked -- it is prime
      primes.push(i);
  
      for (j = i*i; j <= num; j += i) {
        mark[j] = true;
      }
    }
  }
  
  //add all numbers in the primes array
  primes = primes.reduce(function(previousValue, currentValue, index, array) {
    return previousValue + currentValue;
  });
  
  return primes;
  
}

sumPrimes(10);

```