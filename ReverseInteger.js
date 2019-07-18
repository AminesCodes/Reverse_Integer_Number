/* Function that returns a reversed integer
Assume we are dealing with an environment which could only store integers within
the 32-bit signed integer range: [−2powerof31,  2powerof31 − 1].
For the purpose of this problem, assume that your function returns 0
when the reversed integer overflows.
*/

const reverseInteger = (num) => {
  let positive = true;
  let arr =(''+num).split('');
  let reverseNum = 0;

  if (arr[0] === '-') {
    positive = false;
    arr.shift();
  }

  let decimal = 1;
  for (let i = 0; i < arr.length; i++){
    reverseNum += arr[i] * decimal;
    decimal *= 10;
  }

  if (!positive){
    reverseNum *= - 1;
  }

  if (reverseNum < Math.pow(-2, 31)
      || reverseNum >= Math.pow(2, 31)){
    reverseNum = 0;
  }

  return reverseNum;
}

let a = reverseInteger(-37200)
console.log(a)
