"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function isChinhPhuong(n) {
    if (Math.floor(Math.sqrt(n)) - Math.sqrt(n) == 0)
        return true;
    else
        return false;
}
function firstChinhPhuong(m, n) {
    var i = 0;
    for (i = m; i <= n; i++) {
        if (isChinhPhuong(i) == true)
            break;
    }
    return i;
}
var m = Number((0, readline_sync_1.question)("Moi nhap m: "));
var n = Number((0, readline_sync_1.question)("Moi nhap n: "));
console.log(firstChinhPhuong(m, n));
