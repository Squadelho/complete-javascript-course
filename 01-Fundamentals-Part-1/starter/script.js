//coment line
/* coment multiple lines */

/*
 let js = "amazing";
console.log(40 + 8 + 23 - 10);

let firstName = "Hugo";
let myFirtsJob = "Comercial";

console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(myFirtsJob); 
*/

////////////////////////////////////////////////////////////////////

/*      L12 - Primitive Data types:
Number - Floating point numbers -> used for decimals and interger: leat age = 23;
String - Sequence of characters -> used for text: let firstName = "Jonas";
Boolean - Logical type that can only be true or false -> used for taking decisions: let fullAge = true; */
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Hugo");

javascriptIsFun = "yes"; //mudar o valor da variavel
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

//undefined variables
let year;
console.log(year);
console.log(typeof year);
year = 1990;
console.log(typeof year);

console.log(typeof null); //BUG!!!
*/

///////////////////////////////////////////////////////////////////

//      L13 - let, const and var*

// let- pode ser mudado mais tarde: let age --> usar quando a variavel muda durante o script
// const- NAO pode ser mudado: const birthYear --> usar sempre que possivel
// var- old school nao usar!

///////////////////////////////////////////////////////////////////

//      L14 - Basic Operators

/*
// Math operators
const now = 2037;
const ageHugo = now - 1994;
const ageSarah = now - 2020;
console.log(ageHugo, ageSarah);

console.log(ageHugo * 2, ageHugo / 10, 2 ** 3); //2**3 = 2*2*2

const firstName = "Hugo";
const lastName = "Oliveira";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // = 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x);

// Comparison operators
console.log(ageHugo > ageSarah); // true or false >, <, >=, <=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018); // faz a operação 1º depois a comparação
*/

///////////////////////////////////////////////////////////////////

//      L15 - Operators Precedence

/* 
const now = 2037;
const ageHugo = now - 1994;
const ageSarah = now - 2020;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10 1º faz a conta da esquerda para a direita
console.log(x, y); // direita para a esquerda

const averageAge = (ageHugo + ageSarah) / 2; // (...) prioridade
console.log(ageHugo, ageSarah, averageAge); 
*/

///////////////////////////////////////////////////////////////////
