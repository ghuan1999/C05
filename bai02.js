"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function nhap(obj) {
    var n = -1;
    while (n <= 0) {
        n = Number((0, readline_sync_1.question)("Moi nhap " + obj + ": "));
    }
    return n;
}
function tinhTien() {
    var soLuong = nhap("so luong");
    var donGia = nhap("don gia");
    var tien = soLuong * donGia;
    return tien;
}
function tinhVAT(tien) {
    return 0.1 * tien;
}
var tien = tinhTien();
var vat = tinhVAT(tien);
console.log("Tien phai tra: " + tien);
console.log("VAT: " + vat);
