"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var pi = 3.14;
function nhap() {
    var R = -1;
    while (R < 0) {
        R = Number((0, readline_sync_1.question)("Moi nhap ban kinh: "));
    }
    return R;
}
function chuVi(R) {
    return 2 * pi * R;
}
function dienTich(R) {
    return pi * R * R;
}
var R = nhap();
console.log(chuVi(R));
console.log(dienTich(R));
