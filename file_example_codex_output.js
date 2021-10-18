var fs = require('fs');
var file = 'transactions.txt';
var data = '12345,TEST TRANSACTION,000124.34,000177.54,53.2,1234567,JOHN SMITH\n';
fs.appendFile(file, data, function (err) {
if (err) throw err;
console.log('Saved!');
});