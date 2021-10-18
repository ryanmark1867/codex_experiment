var cnt1 = 0;
var cnt2 = 0;
var str = 'ABCDADADADABVDFDFFAF';
var strDest = '';
var str1 = 'TUTORIALSPOINT';
var str2 = 'WELCOME';
var str3 = 'TO AND';
var count = 1;
var unstr = 'WELCOME TO TUTORIALSPOINT';

for (var i = 0; i < str.length; i++) {
cnt1 += 1;
}
console.log('WS-CNT1 : ' + cnt1);

for (var i = 0; i < str.length; i++) {
if (str[i] === 'A') {
cnt2 += 1;
}
}
console.log('WS-CNT2 : ' + cnt2);

for (var i = 0; i < str.length; i++) {
if (str[i] === 'A') {
str = str.replace(str[i], 'X');
}
}
console.log('NEW STRING : ' + str);

strDest = str1.concat(str2, str3, str1, str, count);
console.log('WS-STRING : ' + strDest);
console.log('WS-COUNT : ' + count);

var strArr = unstr.split(' ');
console.log('WS-STR1 : ' + strArr[0]);
console.log('WS-STR2 : ' + strArr[1]);
console.log('WS-STR3 : ' + strArr[2]);