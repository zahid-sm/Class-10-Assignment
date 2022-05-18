
// Email pattern 

let email = 'zhzahid2004@hot.com';
let pattern = /^[a-z0-9_\.]*@[a-z]{2,5}\.[a-z]{2,5}$/i;

console.log(pattern.test(email));





// Username pattern

let username = 'Smzahid2004';

let pattern2 =/^[A-Z]{1,5}[a-z]{2,9}[0-9]{1,5}$/;

console.log(pattern2.test(username));







// Bangladeshi phone number pattern//

let number = '+8801908772860';

let pattern3 = /^(\+8801|01)[0-9]{9}$/;
console.log(pattern3.test(number));






// Password pattern 

let password ='Zahid#@312';

let pattern4 =/^[A-Z1-9_.]{1,9}[@#$%&_(0-9)]{1,}$/i;

console.log(pattern4.test(password));





// Zipcode pattern

let zipcode ='6770';

let pattern5 =/^[0-9]{1,4}$/;

console.log(pattern5.test(zipcode));