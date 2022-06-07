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

//      L17 - Strings and Template Literals

/* 
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`; // `` -> Template Literals

console.log(jonasNew);
console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines"); // \n\ -> nova linha old school

console.log(`String
multiple
lines
using tempplate literals`); //criar multi-lines com o return (enter)
*/

///////////////////////////////////////////////////////////////////

//      L18 -Taking Decisions: if / else Statements

/* 
const age = 19;

if (age >= 18) {
  console.log(`Sarah can start driving license 🚑`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years!`);
}

const birthYear = 1999;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century); 
*/

///////////////////////////////////////////////////////////////////

//      L20 - Type Conversion and Coercion

// Type Conversion
const inputYear = `1991`;
console.log(Number(inputYear), inputYear); //para converter string em numero
console.log(Number(inputYear) + 18);

console.log(Number("jonas")); // resultado: NaN
console.log(typeof NaN);

console.log(String(23), 23); // converter de numero p/ string

// Type Coercion
console.log("I am " + 23 + " Years old"); // + transforma numero em string
console.log("23" - "10" - 3); // resultado 10: - transforma string em numero
console.log("23" * "2"); // resultado 46: * ou / transforma em numero

let n = "1" + 1; // '11' - string
n = n - 1; // 10 - numero

///////////////////////////////////////////////////////////////////

//      L21 -
