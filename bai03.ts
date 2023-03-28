import{question} from 'readline-sync';

function isNamNhuan(nam:number):boolean{
    if((nam%4==0 && nam%100!=0) || nam%400==0){
        return true;
    }
    return false;
}
let nam:number=Number(question("Moi nhap nam: "));
if(isNamNhuan(nam)==true) console.log("Yes");
else console.log("No");