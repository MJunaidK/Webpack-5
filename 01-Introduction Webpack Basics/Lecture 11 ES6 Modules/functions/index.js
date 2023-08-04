/*const add = require('./add');
const subtract = require('./subtract');

module.exports = { add, subtract }; // default export*/

import add from './add';
import subtract from './subtract';

export { add, subtract }; // named export
