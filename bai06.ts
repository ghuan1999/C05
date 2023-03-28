import{question} from "readline-sync"

function isChinhPhuong(n:number):boolean{
    if(Math.floor(Math.sqrt(n))-Math.sqrt(n)==0) return true;
    else return false;
}
function firstChinhPhuong(m:number, n:number):number{
    let i:number=0;
    for(i=m;i<=n;i++){
        if(isChinhPhuong(i)==true) break;
    }
    return i;
}
let m:number=Number(question("Moi nhap m: "));
let n:number=Number(question("Moi nhap n: "));
console.log(firstChinhPhuong(m, n));
