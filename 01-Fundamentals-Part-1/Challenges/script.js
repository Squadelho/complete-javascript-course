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
////////////////////////////////////////////////////////////////////////////

const markMass = 95;
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
);
console.log("Mark BMI is > John BMI? " + markHigherBmi);
