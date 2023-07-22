let date;
let month;
let year;

const today= new Date();
const d= today.getDate();
const m= today.getMonth()+1;
const y= today.getFullYear();
console.log(today);
console.log(d,m,y);

let cy, cm, cd;

document.getElementById("btn").onclick = () => {
    date= document.getElementById("dd").value;
    month= document.getElementById("mm").value;
    year= document.getElementById("yy").value;
    console.log(date, month, year);
    if(month>12 || month<1 || year<0 || year>y || date>31 || date<0){
        window.alert("invalid input");
    }
    else if(month>m && date<d){
        cy=(y-1)-year;
        cm=(12-month)+m;
        cd=d-date;
    }
    else if(month>m && date>d){
        cy=(y-1)-year;
        cm=((12-month)+m)-1;
        cd=(30-date)+d;
    }
    else{
        cy= y-year;
        cm= m-month;
        cd= d-date;
    }
    document.getElementById("c-y").innerHTML=cy;
    document.getElementById("c-m").innerHTML=cm;
    document.getElementById("c-d").innerHTML=cd;
}