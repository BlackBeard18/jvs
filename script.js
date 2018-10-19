/* mon ancien js
var a = 2;
var b = 3;
var c = a + b;
console.log(c);

var a;
var b;
var c;
a=2;
b=6;
c = a+b;
console.log(c); // mon premier resultat
c = a - b;
console.log(c); // mon deuxieme resultat
c = a / b;
console.log(c); // mon troisieme resultat
c = a * b;
console.log(c); // mon quatrieme resultat
c = a % b;
console.log(c); // mon resultat finala = 12

a = 12;
a = a + 5;
a = a + 5;
console.log(a); // afiche un resultat

a ++;
console.log(a);

console.clear();
var a;
var b;

a = parseInt(prompt("a?", "000"));
b = parseInt(prompt("b?", "000"));

function add() {
    var c;
    c="choucroute";
    console.log(a+b);
    console.log(c);
};

console.log(c);
add();
console.log(typeof(12));
console.log(typeof(12.5));
console.log(typeof("12"));
console.log(typeof(true));
console.log(typeof(add));
*/
/*
var age;
var anneeDeNaissance;
var anneeFictive;
var ageFictif;

age = parseInt(prompt("Quel age avez vous ?","18"));
anneeDeNaissance = 2018 - age;
console.log("Vous ètes né en " + anneeDeNaissance);
anneeFictive = parseInt(prompt("En quelle année voulez vous être projeté ?", "1982"));
ageFictif = anneeFictive - anneeDeNaissance;
console.log("En " + anneeFictive + " vous aurriez " + ageFictif + "an(s).");*/

//operateurs logique
/* 
 console.log(1==1); //true
 console.log(1=="1"); //true
 console.log(1==="1"); //false
 console.log(1<=2); //true
 console.log(1>=2); //false
 console.log(1<2); //true
 console.log(1>2); //false
 console.log(1!=2); //true
 console.log(1!=1); //false
 console.log(1!=="1"); //true

 console.log(true && true); //true
 console.log(1==1 && 1<2); //true
 console.log(true && false); //false
 console.log(1==1 && 1>=2); //false
 
 // ou

 console.log(true || false); //true
 console.log(1==1 || 1>2); //true

 console.log(false || false); //false
 console.log(1!=1 || 1>2); //false

 // condition

 if (condition){
     ;
 }
 var a = 5;
 var b = 12;

if (a==b){
    console.log("les chiffres sont égaux")
}

// "les chiffres sont égaux"

if (a!==b){
    console.log("les chiffres sont égaux")
} else {
    console.log("les chiffres sont égaux")
}

// "les chiffres sont égaux"
*/
/*
var age;
var anneeDeNaissance;
var anneeFictive;
var ageFictif;

age = parseInt(prompt("Quel age avez vous ?","18"));
anneeDeNaissance = 2018 - age;
console.log("Vous ètes né en " + anneeDeNaissance);
anneeFictive = parseInt(prompt("En quelle année voulez vous être projeté ?", "1982"));
ageFictif = anneeFictive - anneeDeNaissance;
console.log("En " + anneeFictive + " vous aurriez " + ageFictif + "an(s).");

if (age<18){
    console.log("vous étes mineurs")
} else {
    console.log("vous étes majeurs")
}*/
/*
var a = 5;
var b = 6;
var c = 7;

if (a == b) {
    console.log("a et b sont égaux");
} else if (a == c) {
    console.log("a et c sont égaux");
} else if (b == c) {
    console.log("b et c sont égaux");
} else {
    console.log("tous les chiffres sont différentsd");
} */
/*
var age;
var anneeDeNaissance;
var anneeFictive;
var ageFictif;

age = parseInt(prompt("Quel age avez vous ?","18"));
anneeDeNaissance = 2018 - age;
console.log("Vous ètes né en " + anneeDeNaissance);
anneeFictive = parseInt(prompt("En quelle année voulez vous être projeté ?", "1982"));
ageFictif = anneeFictive - anneeDeNaissance;
console.log("En " + anneeFictive + " vous aurriez " + ageFictif + "an(s).");

if (age<18){
    console.log("vous étes mineurs")
} else {
    console.log("vous étes majeurs")
}

if (age>59){
    console.log("vous étes trop vieux, quitter la séssion pour une retraitre paisible")
} else {
    console.log("continuer")
}*/
/*
for (i=0; i<=5; i=i+1) {
    console.log(i);
    if(i==3){
        break;
    }
}

var i = 0;

while (i<=5) {
    console.log(i);
    i++;
}
function add(x, y){
    console.log(x+y);
}
add(5, 6); //11
var a = 6;
var b = 7;

add (a,b); //11 
*/
//
var  = 1;
var b = 100;

a = parseInt(prompt("An quel année a été créé le première ordinateur?","0000"));

if (a<100){
    console.log("vous étes trop éloigner de la date")
} else {
    console.log("vous étes pret de la date")
}

function tireNombreAleatoire() { 
    cosole.log(Math.round(Math.random() * 10)); 
}

tireNombreAleatoire();
 
/* pense a te servir de while pour l'exersice */
