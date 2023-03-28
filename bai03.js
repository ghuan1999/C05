"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function isNamNhuan(nam) {
    if ((nam % 4 == 0 && nam % 100 != 0) || nam % 400 == 0) {
        return true;
    }
    return false;
}
var nam = Number((0, readline_sync_1.question)("Moi nhap nam: "));
if (isNamNhuan(nam) == true)
    console.log("Yes");
else
    console.log("No");
