// for multiple import functions
/*import { simple, simple23 } from "./newexportmodule.mjs";

simple()
simple23()
*/

// for single import function
/*import { simple } from "./newexportmodule.mjs";

// simple()
*/

// for importing everything form the module
import * as a2 from "./newexportmodule.mjs"

console.log(a2)
a2.simple()
a2.simple23()
