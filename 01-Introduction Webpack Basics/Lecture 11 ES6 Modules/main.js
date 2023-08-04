//import add from './functions/add'; // default import
//import { add } from './functions'; // named import

import * as $ from './functions'; //  importing all of the functions that are exported by this functions using an alias name

const output = $.add(1, 2);
console.log(output);
