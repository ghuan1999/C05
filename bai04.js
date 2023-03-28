"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function docSo(x) {
    if (x > 99)
        console.log("So khong hop le");
    else {
        if (x < 20) {
            switch (x % 10) {
                case 0:
                    console.log("Muoi");
                    break;
                case 1:
                    console.log("Muoi " + "mot");
                    break;
                case 2:
                    console.log("Muoi " + "hai");
                    break;
                case 3:
                    console.log("Muoi " + "ba");
                    break;
                case 4:
                    console.log("Muoi " + "bon");
                    break;
                case 5:
                    console.log("Muoi " + "nam");
                    break;
                case 6:
                    console.log("Muoi " + "sau");
                    break;
                case 7:
                    console.log("Muoi " + "bay");
                    break;
                case 8:
                    console.log("Muoi " + "tam");
                    break;
                case 9:
                    console.log("Muoi " + "chin");
                    break;
            }
        }
        else {
            var chuc = "";
            var donVi = "";
            switch (Math.floor(x / 10)) {
                case 2:
                    chuc = "Hai muoi";
                    break;
                case 3:
                    chuc = "Ba muoi";
                    break;
                case 4:
                    chuc = "Bon muoi";
                    break;
                case 5:
                    chuc = "Nam muoi";
                    break;
                case 6:
                    chuc = "Sau muoi";
                    break;
                case 7:
                    chuc = "Bay muoi";
                    break;
                case 8:
                    chuc = "Tam muoi";
                    break;
                case 9:
                    chuc = "Chin muoi";
                    break;
            }
            switch (x % 10) {
                case 0:
                    donVi = "";
                    break;
                case 1:
                    donVi = "mot";
                    break;
                case 2:
                    donVi = "hai";
                    break;
                case 3:
                    donVi = "ba";
                    break;
                case 4:
                    donVi = "bon";
                    break;
                case 5:
                    donVi = "lam";
                    break;
                case 6:
                    donVi = "sau";
                    break;
                case 7:
                    donVi = "bay";
                    break;
                case 8:
                    donVi = "tam";
                    break;
                case 9:
                    donVi = "chin";
                    break;
            }
            console.log(chuc, donVi);
        }
    }
}
var x = Number((0, readline_sync_1.question)("Nhap vao so nguyen co 2 chu so: "));
docSo(x);
