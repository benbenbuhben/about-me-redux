'use strict';

document.getElementById('myFace').onclick = function () {

  alert('Let\'s get to know Ben...');

  var numberRight = 0;

  //Question #1
  function question1() {
    var ageGuess = prompt('Do you think I\'m older than 30?');

    while (ageGuess.length < 1) {
      alert('You did not answer!');
      ageGuess = prompt('Do you think I\'m older than 30?');
    }
    if (ageGuess.charAt(0).toLowerCase() === 'y') {
      alert('Correctomundo!');
      numberRight++;
    } else {
      alert('Wrong!');
    }

    console.log('Q: Do you think I\'m older than 30?, A: ' + ageGuess);
  }
  question1();

  //Question #2
  function question2() {
    var dogGuess = parseInt(prompt('How many dogs do you think I have?'));

    while (dogGuess.length < 1) {
      alert('You did not answer!');
      dogGuess = prompt('How many dogs do you think I have?');
    }

    if (dogGuess === 1) {
      alert('Good Job!');
      numberRight++;
    } else if (dogGuess === 0) {
      alert('Wrong! I have one dog');
    } else if (dogGuess > 1) {
      alert('Wrong! I have one dog!');
    } else {
      alert('Please enter a number 0 or greater.');
    }

    console.log('Q: How many dogs do you think I have?, A: ' + dogGuess);
  }

  question2();

  //Question #3
  function question3() {
    var favMovie = prompt('Do you think my favorite movie is Bill & Ted\'s Excellent Adventure?');

    while (favMovie.length < 1) {
      alert('You did not answer!');
      favMovie = prompt('Do you think my favorite movie is Bill & Ted\'s Excellent Adventure?');
    }

    if (favMovie.charAt(0).toLowerCase() === 'n') {
      alert('How\'d you know? My favorite movie is actually Bill & Ted\'s Bogus Journey!');
      numberRight++;
    } else {
      alert('Wrong! My favorite movie is actually Bill & Ted\'s Bogus Journey!');
    }

    console.log('Q: Do you think my favorite movie is Bill & Ted\'s Excellent Adventure?, A: ' + favMovie);
  }

  question3();

  //Question #4
  function question4() {
    var humanStatus = prompt('Am I human or droid?');

    while (humanStatus.length < 1) {
      alert('You did not answer!');
      humanStatus = prompt('Am I human or droid?');
    }

    if (humanStatus.toLowerCase() === 'human') {
      alert('Yes, I am human. I like doing human things like writing code.');
      numberRight++;
    } else {
      alert('No. I am human. I like doing human things like writing code.');
    }

    console.log('Q: Am I human or droid?, A: ' + humanStatus);
  }

  question4();
  //Question #5
  function question5() {
    var labQuality = prompt('Do you think this is the best lab project you\'ve ever laid your unworthy eyes upon?');

    while (labQuality.length < 1) {
      alert('You did not answer!');
      labQuality = prompt('Do you think this is the best lab project you\'ve ever laid your unworthy eyes upon?');
    }

    if (labQuality.charAt(0).toLowerCase() === 'y') {
      alert('Boo Yah.');
      numberRight++;
    } else {
      alert('Blasphemy!');
    }
    console.log('Q: Do you think this is the best lab project you\'ve ever laid your unworthy eyes upon?, A: ' + labQuality);
  }

  question5();
  //Question #6
  function question6() {

    var randNum = Math.floor(Math.random() * 10 + 1);
    var answer1 = false;
    var guessCount1 = 0;

    while (answer1 === false) {

      var numGuess = prompt('Guess what number I\'m thinking of (between 1 and 10)');
      var guess2num = parseInt(numGuess);


      if (guess2num === randNum) {
        alert('Woohoo!');
        answer1 = true;
        if (guessCount1 === 0) {
          numberRight++;
        }
      } else if (guess2num > randNum) {
        alert('Too high! Try again.');
      } else if (guess2num < randNum) {
        alert('Too low! Try again.');
      } else {
        break;
      }
      guessCount1++;
      console.log('My number was ' + randNum + '. It took you ' + guessCount1 + ' guesses.');
    }

  }


  question6();
  //Question #7
  function question7() {
    var answerBank = ['Mexico', 'Canada', 'Belize', 'Guatemala', 'El Salvador', 'Honduras', 'Nicaragua', 'Costa Rica', 'Panama', 'Colombia', 'Ecuador', 'Peru', 'Bolivia', 'Argentina', 'Chile', 'Uruguay'];

    var answer = false;
    var guessCount = 0;
    //console.log(answerBank);
    //


    while (answer === false) {

      if (guessCount === 0) {
        var countryGuess = prompt('Can you guess a (properly spelled and first-letter capitalized) country I\'ve traveled to (Hint: mostly Latin America)?');
        console.log(countryGuess);
      } else {
        countryGuess = prompt('Try again! Can you guess a country I\'ve traveled to?');
        console.log(countryGuess);
      }

      for (var i = 0; i < answerBank.length; i++) {

        if (countryGuess === answerBank[i]) {
          alert('Correct!');
          if (guessCount === 0) {
            numberRight++;
          }
          answer = true;
        }
      }
      guessCount++;

      if (guessCount > 6) {
        break;
      }
    }

    alert('I have been to these countries: ' + answerBank);
  }

  question7();


  alert('You got ' + numberRight + ' out of 7 correct (on the first try)!');

};

//Mouse hover functionality (FCNS NOT ALLOWED IN THIS LAB)

document.getElementById('myFace').addEventListener('mouseover', mouseOver);
document.getElementById('myFace').addEventListener('mouseout', mouseOut);

function mouseOver() {
  document.getElementById('myFace').style.color = 'gray';
}

function mouseOut() {
  document.getElementById('myFace').style.color = 'black';
}