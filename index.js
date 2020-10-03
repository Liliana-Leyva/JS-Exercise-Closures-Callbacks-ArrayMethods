// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
/*
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
} processFirstItem()

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * the count variable in counter1 code is inside the function and count variable on counter2 code is global.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * Counter1 code has closure because it has access to the outer scope in its inner scope.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * It would be better counter2 if you are going to use it more than once because the variables on 
 * counter1 are global and on counte1 are declared inside the function.
 * 
 *
*/

 //counter1 code
 function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 
Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */
function inning(){ // 
let numberOfPoints=Math.ceil(Math.random() * 3); //the variable numberOfPoints is assigned and does a random number from 0 to 2 and then it is rounded to it higher int number
return (numberOfPoints);// function return the value of the variable numberOfPoints

}
console.log("task 2: ", inning());//function is called
console.log("                        ");
/* Task 3: finalScore()
Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.
For example, 
finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}
*/ 
function finalScore(inning, numberOfGames){//this function takes the last functio as an argument and numberOfGames is going to be determinated when we call the function
  let casa =0
  let visitantes = 0
   let finalResult={}
  for(let i=0; i<numberOfGames; i++){
    
    finalResult=({ "home":casa +=inning(), "away": 
    visitantes +=inning()})
    
  }
  return finalResult
} 
console.log("task 3: ",(finalScore(inning,9)));




/*function finalScore(callback, innings){
  In here there needs to be 2 variables.
  1. A home score
  2. A away score
  A for loop that goes through the innings and adds the callback to the variables on every iteration. and then returns a string that includes the home score and away score at the end.
}*/


//finalscore(inning, 5)

/* Task 4: 
Create a function called `scoreboard` that accepts the following parameters: 
(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings
and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

 function scoreboard(getInningScore,inning,innings) {
          
          let total = { //the object is declared and the key is initialized to 0
            "home": 0,
            "away": 0
          }
          for (let i = 0; i < innings; i++) { 
            total.home += inning();
            total.away += inning();

            getInningScore(i, total);
          }
          return total

          console.log(finalScore(inning, 9));
        }

        console.log("     ");

        function newScore(inning, total) {
          if (inning === 0) {
            console.log(
                (inning ++) + "st inning: "+  "homeTeam " + total.home + " awayTeam " + total.away
            );
          }
          else if (inning === 1) {
            console.log(
                (inning ++) + "nd inning: " + "homeTeam " + total.home + " awayTeam " + total.away);
          }
          else if (inning === 2) {
            console.log(
                (inning ++) + "rd inning: " +  "homeTeam "+ total.home + " awayTeam " + total.away
            );
          }
          else {
            console.log(
                (inning ++) + "th inning: " +  "homeTeam " + total.home + " awayTeam "+ total.away);
          }
        };
        console.log("Total Score:  ",scoreboard(newScore, inning, 9));
    