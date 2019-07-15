const HashTable = require('./HashTable');

const table = new HashTable();
table.set('marron', '#800000');
table.set('yellow', '#FFFF00');
table.set('salmon', '#FA8072');

console.log(table.get('salmon'));
console.log(table.keys());
console.log(table.values());
