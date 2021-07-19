var readlineSync = require ("readline-sync");



var chalk = require ("chalk")

var name = readlineSync.question(chalk.bgMagenta(" What is Your Name: ") + " ")

console.log ("\nHi!! " + name + "\n")

//  Asking the basic questions and creating a loop for wrong Input

do{
var q2 = readlineSync.question(chalk.bgBlue("Have You watched Breadking Bad TV Series?(y/n) ") + " ")
var a = 0
if ( q2 === "y"){
  console.log ("\nThat Great!! We are going to play a quiz \nLet's Start\n\n");a = " ";b = " "
} else if ( q2 === "n"){
  console.log("\n\nPlease watch the series! It is Super Awesome ")
  do{
    var b = 0;
   var q3 = readlineSync.question(chalk.bgRed("\nDO you want to Play a Quiz on Breaking Bad?(y/n) ") + " ")
   if ( q3 === "y"){
     console.log ( "\nThat's Great!! Let's Start");a = " " ;b = " "
   } else if ( q3 === "n"){
     console.log ("\nWell!! We are going to play it anyway\n"); a = " "
   } else {console.log(chalk.red("\n\nError!!! Plz write Only \ny = Yes \nn = No")); a = " "}
  } while ( b === 0 )
}  else {console.log("\nError!!! Plz write Only \ny = Yes \nn = No\n")} 
} while ( a === 0 )

console.log (chalk.bgCyan("\n\n ============================================== \n --------- Welcome to the BB Quiz ------------- \n ============================================== "))

console.log ("\nHi!! " + name + "\n" + chalk.red("Plz Read all the Instructions Below:") + "\n1) Plz type only " + chalk.yellow(" a ,b ,c & d ") + chalk.blue(" (Any answer other than these 4 are not Accepted)") + "\n2) There will be a " + chalk.yellow(" negative marking of 0.25 ")  + " for every wrong answer \n3) For every Right answer you will be rewarded with 1 mark \n4) There are " + chalk.yellow(" 3 Level ") +  " in this game \n5) To clear " +  chalk.yellow(" level 1 ") + " , You will need to " + chalk.yellow(" score 4 ") + " \n6) To clear " +  chalk.yellow(" level 2 ") + " , You will need to " + chalk.yellow(" score 8 ") )

console.log("\n==============================================")

//  Writing Function

function play(question,answer){
  var ques = readlineSync.question(question)

  if ( ques === answer ){
    console.log (chalk.bgBlue("\nYou are Right!! \n"))
    score = score + 1
  } else { 
    console.log (chalk.bgRed("\nYou are Wrong!! \n"))
    score = score - 0.25
  }
}

//  Highscore 

var highScore = [
  {name: "Kunal" , score : "11.5" },
{name: "Hitesh" , score : "11"},
{name: "Gaurav" , score : "10.5"},
{name: "Manoj" , score : "10"}
]

// level 1
do {
  var try1 = 0;
var score = 0;

console.log (chalk.bgMagenta("\n\n          ==============================================          \n          --------- Welcome to the Level 1 -------------          \n          ==============================================          \n\n"))

// creating a array of level 1 question

var level1questions = [
  {q: chalk.blue("Ques-1 ")+"Which year was breaking bad first aired? \na. 2009 \nb. 2008 \nc. 2010 \nd. 2011 \n"+chalk.magenta("\nYour answer is: "), a: "b"} ,
  {q: chalk.blue("Ques-2 ")+ " Which are of science does Walt teach at School? \na. physics \nb. Math \nc. English \nd. chemistry"+chalk.magenta("\nYour answer is: "), a: "d" } ,
  {q: chalk.blue("Ques-3 ")+" Which food does Walt infamously throw onto the roof of the house? \na. Burger \nb. Pizza \nc. Pasta \nd. sandwich"+chalk.magenta("\nYour answer is: "), a:"b"} ,
  {q:chalk.blue("Ques-4 ")+" name of Infant Daughter of Walt and Skyler White? \na. Nancy \nb. Hailer \nc. Holly \nd. Molly"+chalk.magenta("\nYour answer is: "), a:"c"}
]

//  calling the function and creating the loop

for ( var l1 = 0 ; l1 < level1questions.length ; l1++){
  var level1ques = level1questions[l1]
  play(level1ques.q , level1ques.a)
}

console.log ("Your score fore level 1: " + score )

if ( score >= "4"){
  console.log ("Congrats!! let's Play the level 2 \n\n")

  
  // level 2
do {
  var p = 0;
var score = 4;

console.log (chalk.bgYellow("\n\n          ==============================================          \n          --------- Welcome to the Level 2 -------------          \n          ==============================================          \n\n"))

//  Creating an Array of Objects

var level2questions = [
  {q: chalk.blue("Ques-5 ")+" Highest Rated Episode with 10/10 score on Imdb with 135k votes: \na. s01e08 \nb. s04e05 \nc. s03e03 \nd. s05e14 "+chalk.magenta("\nYour answer is: ") , a: "d"} ,
  {q: chalk.blue("Ques-6 ")+" Gus Fring's meth superlab is based underneath a warehouse. What does the above ground business specialise in? \na. Fast Food Company \nb. Laundry \nc. Salon \nd. Grocery Store "+chalk.magenta("\nYour answer is: "), a:"b"} ,
  {q: chalk.blue("Ques-7 ")+" Two element from the periodic table - br and ba - are used in the breaking bad title Image. Name the elements \na. boroline,borium \nb. bromine,barium \nc. broium,borium \nd. brolium,boroline"+chalk.magenta("\nYour answer is: "),a:"b"} ,
  {q: chalk.blue("Ques-8 ")+" What is Gus Fring's Nationality? \na. mexican \nb. Chilean \nc. English \nd. African "+chalk.magenta("\nYour answer is: "), a:"b"}
]

// calling the Function and creating a loop

for ( var l2 = 0 ; l2 < level2questions.length ; l2++ ){
  var level2ques = level2questions[l2];
  play(level2ques.q , level2ques.a )
}

console.log ("Your score for level 2 is : " + score )

if ( score >= "8"){

  score = 8;

  console.log ("\nCongrats!! Let's play the level 3 \n\n")

  console.log (chalk.bgBlack("\n\n          ==============================================          \n          --------- Welcome to the Level 3 -------------          \n          ==============================================          \n\n"))


//  Array of Level 3 questions

  var level3questions = [
    {q: chalk.blue("Ques-9 ")+" Name the Plant Walt used to poison a child? \na. lilly of the valley \nb. rose of the valley \nc. white lilly \nd. White Snakeroot "+chalk.magenta("\nYour answer is: "), a: "a"},
    {q: chalk.blue("Ques-10 ")+" Name the famous author of the book Hanks reads to discover Walt's True Identity? \na. Walt Blackman \nb. Malt Whitman \nc. Walt Whiteman \nd. Malt Yellowman "+chalk.magenta("\nYour answer is: "), a:"c"},
    {q: chalk.blue("Ques-11 ")+" What Nickman does Jesse give to the RV he uses with Walt to cook Meth? \na. The crystal boat \nb. The Krystal Rocket \nc. The krystal bus \nd. The Krystal Ship "+chalk.magenta("\nYour answer is: "), a: "d" },
    {q: chalk.blue("Ques-12 ")+" What is the name of Skinny Pete's accomplice? \na. badger \nb. Nadger \nc. Jesse \nd. James "+chalk.magenta("\nYour answer is: "), a: "a"}
  ]

// Calling the Function

for ( var h = 0 ; h < level3questions.length ; h++){
  var currentlevel3ques = level3questions[h];
  play( currentlevel3ques.q , currentlevel3ques.a )
}


// Final Score 

console.log(chalk.yellow("Your Final Score is: ") + score )

console.log (chalk.cyan("\n\n     High scores \n"))

for ( var h = 0 ; h < highScore.length ; h++ ){
  var currenthigh = highScore[h];
  console.log (chalk.magenta("Name: ") + currenthigh.name)
  console.log(chalk.cyan("Score: ") + currenthigh.score)
  console.log("---------------------")
}

if ( score > highScore[0].score ){
  console.log (chalk.yellowBright("\n\nCongratulation!!! you have earned the Highest Score \nPlz share screenshot on my Email id: knlarya7@gamil.com \nSo that, I can update my Highscore List"))
}

try1 = " ";

p = " "
} else {
  console.log ("Sorry " + name + " Unfortunately! You have not able to passed the Level 2")
  do{
    var j = 0;
    var tryagain2 = readlineSync.question("Do you want to try again? (y/n) ")
    if ( tryagain2 === "y"){ 
     j = " " 
    } else if( tryagain2 === "n" ){
      console.log ("\nThank you Playing the Game \nHope You Like our Little game Quiz ; )")  ; j = " " ; try1 = " " ; c = " " ; p = " "
      } else
      {
      console.log (chalk.red("\nError!!! Plz write Only \ny = Yes \nn = No\n"))} ; l2 = " "
    } while ( j === 0 )
  }
} while ( p === 0 )
}







 else {
  console.log ("Sorry " + name + " Unfortunately You have not able to passed the level 1")
  do{
    var c = 0;
  var tryagain = readlineSync.question("Do you want to try again? (y/n) ")
  
  if ( tryagain === "y"){ c = " "
  } else if ( tryagain === "n" ){
    console.log("\nThank You playing the game\nHope you like our little game Quiz ;)")
    ;try1 = " " , c = " "
  } else {console.log(chalk.red("\nError!!! Plz write Only \ny = Yes \nn = No\n"))}
  } while ( c === 0)
}
} while ( try1 === 0 )