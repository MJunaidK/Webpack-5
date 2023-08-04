//const { add, addAndMultiply } = require('./functions/add');

const { add: addNumbers, subtract } = require('./functions');

function add() {
  console.log('hello');
}
add();
const output = addNumbers(1, 2);
console.log(output);
