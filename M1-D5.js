/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
let lengthOfRectangle
let widthOfRectangle
const area = function(lengthOfRectangle,widthOfRectangle){
 console.log("Area of Rectangle with length = "+lengthOfRectangle+" and width = "+widthOfRectangle+" is:" +(lengthOfRectangle * widthOfRectangle))
}
area(11,12)
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
let firstValue 
let secondValue
const crazySum = function(firstValue,secondValue)
{
    if(firstValue === secondValue){
        console.log("The two values, " +firstValue+ " and "+secondValue+ " are SAME. So,the result of the sum of the given two numbers multipled by 3 is: "+(firstValue+secondValue)*3)
    }else{
      console.log("The two values, " +firstValue+ " and "+secondValue+ " are SAME. So,the result of the sum of the given two numbers is: "+(firstValue+secondValue))
        }
}
crazySum(1,2)
crazySum(2,2)

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

let givenNumber
let comparedNumber = 19
const crazyDiff = function(givenNumber,comparedNumber){
    absoluteDifference = Math.abs(givenNumber)- Math.abs(comparedNumber)
    if(absoluteDifference > 19){
        console.log("The Triple times absolute difference between the given number, "+givenNumber+ " and 19 is: "+absoluteDifference)
    }else{
        console.log("The difference between the given number,"+givenNumber+ " and 19 is: "+absoluteDifference)
    } 
}
crazyDiff(20,comparedNumber)
crazyDiff(50,comparedNumber)

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
