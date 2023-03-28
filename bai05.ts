import{question} from 'readline-sync';

function isSoHoanThien(n:number):boolean{
    let dem:number=0;
    for(let i:number=1;i<=Math.ceil(n/2);i++){
        if(n%i==0) dem+=i;
    }
    if(n==dem) return true;
    else return false;
}


let n:number=Number(question("Moi nhap n: "));
if(isSoHoanThien(n)==true) console.log("Yes");
else console.log("No");

