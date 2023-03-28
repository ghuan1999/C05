import{question} from 'readline-sync';

const pi:number=3.14;
function nhap():number{
    let R:number=-1;
    while(R<0){
        R=Number(question("Moi nhap ban kinh: "));
    }
    return R;
}
function chuVi(R:number):number{
    return 2*pi*R;
}
function dienTich(R:number):number{

    return pi*R*R;
}
let R:number=nhap();
console.log(chuVi(R));
console.log(dienTich(R));
