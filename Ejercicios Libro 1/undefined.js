// With strictNullChecks set to true
var aaa = undefined; // Ok
var bbb = null; // Error
var ccc = undefined; // Error
var ddd = undefined; // Ok
// With strictNullChecks set to false
var aaaa = undefined; // Ok
var bbbb = null; // Ok
var cccc = undefined; // Ok
var dddd = undefined; // Ok
