import{question} from 'readline-sync';

const pi:number=3.14;
function nhap():number{
    let R:number=-1;
    while(R<0){
        R=Number(question("Moi nhap ban kinh: "));
    }
    return R;
}
function chuVi():number{
    let R:number=nhap();
    return 2*pi*R;
}
function dienTich():number{
    let R:number=nhap();
    return pi*R*R;
}
