//*LECTURE: Values and Variables*
const country = "Portugal";
const continent = "Europe";
let population = 10;

console.log(country);
console.log(continent);
console.log(population);

//*LECTURE: Data Type*
isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);

//*LECTURE: let, const and var*
language = "Portuguese";

//*LECTURE: Basic Operators*
let populationEachSide = population / 2;
population++;
console.log(population);
let populationFinland = 6;
console.log(population > populationFinland);
const averagePopulation = 33;
console.log(population < averagePopulation);
console.log(
  country +
    " is in " +
    continent +
    " and its " +
    population +
    " million people speak " +
    language
);
