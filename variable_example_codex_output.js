// JavaScript version

var firstVar = new Intl.NumberFormat('en-US', {
style: 'decimal',
minimumIntegerDigits: 3,
minimumFractionDigits: 2,
maximumFractionDigits: 2
}).format(0);

var secondVar = new Intl.NumberFormat('en-US', {
style: 'decimal',
minimumIntegerDigits: 3,
minimumFractionDigits: 2,
maximumFractionDigits: 2
}).format(-123.45);

var thirdVar = 'ABCDEF';

var fourthVar = 'A121$';

var groupVar = {
subvar1: 337,
subvar2: 'LALALALA',
subvar3: 'LALALA',
subvar4: 'LALALA'
};

console.log('1ST VAR :', firstVar);
console.log('2ND VAR :', secondVar);
console.log('3RD VAR :', thirdVar);
console.log('4TH VAR :', fourthVar);
console.log('GROUP VAR :', groupVar);
// end