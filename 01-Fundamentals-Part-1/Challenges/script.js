/*
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

//CODE

/* const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;
const markBmi = markMass / markHeight ** 2;
const johnBmi = johnMass / johnHeight ** 2;

const markHigherBmi = markBmi > johnBmi;

console.log(
  "Mark mass is " +
    markMass +
    " , height is " +
    markHeight +
    " and BMI is " +
    markBmi
);
console.log(
  "John mass is " +
    johnMass +
    " , height is " +
    johnHeight +
    " and BMI is " +
    johnBmi
); */

////////////////////////////////////////////////////////////////////////////
/* 
Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 
GOOD LUCK 
*/

// CODE

/* if (markHigherBmi) {
  console.log(`Mark's
  BMI ${markBmi} is higher than John's ${johnBmi}`);
} else {
  console.log(`John's
  BMI (${johnBmi}) is higher than John's (${markBmi})`);
} */

////////////////////////////////////////////////////////////////////////////

/* Coding Challenge #3

There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks 
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK  */

//CODE

const dolphinsScoreOne = 97;
const dolphinsScoreTwo = 112;
const dolphinsScoreThree = 101;
const dolphinsScoreAverage =
  (dolphinsScoreOne + dolphinsScoreTwo + dolphinsScoreThree) / 3;

const koalasScoreOne = 109;
const koalasScoreTwo = 95;
const koalasScoreThree = 106;
const koalasScoreAverage =
  (koalasScoreOne + koalasScoreTwo + koalasScoreThree) / 3;

console.log(dolphinsScoreAverage, koalasScoreAverage);

if (dolphinsScoreAverage > koalasScoreAverage) {
  console.log(`DOLPHINS WINNNN!!!!!!`);
} else if (dolphinsScoreAverage === koalasScoreAverage) {
  console.log(`ITS A DRAW!!!!`);
} else {
  console.log(`KOALAS WINNNN!!!!!!`);
}

if (dolphinsScoreAverage > koalasScoreAverage && dolphinsScoreAverage >= 100) {
  console.log(`Dolphins Win!`);
} else if (
  dolphinsScoreAverage < koalasScoreAverage &&
  koalasScoreAverage >= 100
) {
  console.log(`Koallas Win`);
} else if (
  dolphinsScoreAverage === koalasScoreAverage &&
  koalasScoreAverage >= 100 &&
  dolphinsScoreAverage >= 100
) {
  console.log(`Draw`);
} else {
  console.log(`No winer today`);
}
