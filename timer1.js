// make a time that goes off when in the node we call
// node timmer1.js 10 3 5 15 9 => these are the times not the target alarms
// target alarms will go off at 3,5,9,10
// when these hit we make a sound
// process.stdout.write('\x07'); makes the ding

// other considerations
// no numbers are provided
// an input is a negative number
// an input is not a number


let timesToEvaluate = process.argv.slice(2); // calls the times suggest


// let delayedTime = 0;// my box to store the delay
let timer = (array) => {//my function to take in timesToEvaluate because argv brings me an array
  for (let numbers of array) { // iterate throught he numbers of the array
    if(!isNaN(numbers) && numbers >= 0 ){//these are the conditions to not run below
      setTimeout(() => {
        process.stdout.write('\x07' + numbers + "\n")// call the alarm at each number
      },numbers * 1000 ); //we gotta add to delayed time
      // delayedTime +=3000 //add each time executed
    }
  }
};

timer(timesToEvaluate);



