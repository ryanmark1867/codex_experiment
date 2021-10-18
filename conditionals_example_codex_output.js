var num1 = 25;
var num2 = 15;
var num3 = num1;
var num4 = num2;

if (num1 > num2) {
console.log('IN LOOP 1 - IF BLOCK');
if (num3 === num4) {
console.log('IN LOOP 2 - IF BLOCK');
} else {
console.log('IN LOOP 2 - ELSE BLOCK');
}
} else {
console.log('IN LOOP 1 -ELSE BLOCK');
}

var checkVal = 65;
if (checkVal >= 041 && checkVal <= 100) {
console.log('PASSED WITH ' + checkVal + ' MARKS.');
} else {
console.log('FAILED WITH ' + checkVal + ' MARKS.');
}

switch (true) {
case num1 < 2:
console.log('NUM1 LESS THAN 2');
break;
case num1 < 19:
console.log('NUM1 LESS THAN 19');
break;
case num1 < 1000:
console.log('NUM1 LESS THAN 1000');
break;
}