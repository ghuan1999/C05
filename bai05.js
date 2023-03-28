"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function isSoHoanThien(n) {
    var dem = 0;
    for (var i = 1; i <= Math.ceil(n / 2); i++) {
        if (n % i == 0)
            dem += i;
    }
    if (n == dem)
        return true;
    else
        return false;
}
var n = Number((0, readline_sync_1.question)("Moi nhap n: "));
if (isSoHoanThien(n) == true)
    console.log("Yes");
else
    console.log("No");
