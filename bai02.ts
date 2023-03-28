import{question} from 'readline-sync';

function nhap(obj:String):number{
    let n:number=-1;
    while(n<=0){
        n=Number(question("Moi nhap "+obj+": "));
    }
    return n;
}
function tinhTien():number{
    let soLuong:number=nhap("so luong");
    let donGia:number=nhap("don gia");
    let tien:number=soLuong*donGia;
    return tien;
}
function tinhVAT(tien:number):number{
    return 0.1*tien;
}
let tien:number=tinhTien();
let vat:number=tinhVAT(tien);
console.log("Tien phai tra: "+tien);
console.log("VAT: "+vat);
