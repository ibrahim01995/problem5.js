
// problem-no-1
let inputW = [50, '10', 0, 75, 'a', null, NaN, undefined];
let Weight = [];

if (Array.isArray(inputW)) {
  fixWeightMachine(inputW);
}
else {
  console.log('Invalid Input');
}

function fixWeightMachine(ab) {

  for (let i of ab) {
    if (typeof i === 'number' && i > 0) {
      Weight.push(i);
    }
  }
  console.log(Weight);
}



//  Problem - no-2

let vowel = ['a', 'e', 'i', 'o', 'u'];
let incomingInput = 'aBBcdeef';
incomingInput = incomingInput.trim();

if (typeof incomingInput === 'string') {
  countVowels(incomingInput);
} else {
  console.log('Invalid Input');
}

function countVowels(Input) {
  let vowelCounter = 0;
  for (let i = 0; i < inp.length; i++) {
    let x = incomingInput[i];
    x = x.toLowerCase();
    if (vowelArray.includes(x)) {
      vowelCounter = vowelCounter + 1;
    }
  }
  console.log(vowelCounter);
}


//  Problem - no-3
const testMarks = [45, 55, 65, 75, 85, 95, "invalid", undefined];

function evaluateResult(marks) {

  if (Array.isArray(marks)) {

  }
  else {
    console.log("Invalid Input");

  }
  return marks.map(mark => {
    if (typeof mark !== "number") {
      console.log(null);

    } else if (mark < 50) {
      console.log('F');

    } else if (mark >= 50 && mark <= 59) {
      console.log('D');

    } else if (mark >= 60 && mark <= 69) {
      console.log('C');

    } else if (mark >= 70 && mark <= 79) {
      console.log('B');

    } else if (mark >= 80 && mark <= 89) {
      console.log('A');

    } else if (mark >= 90) {
      console.log('+A');

    } else {
      console.log(null);

    }
  })
}
console.log(evaluateResult(testMarks));




//   Problem - no- 4


var object =
{
  name: "robin",
  year: 1995
};

if (typeof object === "object") {
  createPerfectPassword(object);
} else {
  console.log('Invalid Input');
}

function createPerfectPassword(obj) {
  var name = obj.name;
  var firstLetter = name[0].toUpperCase();
  name = name.slice(1, name.length);
  name = firstLetter + name;

  if (obj.year.length < 4) {
    console.log('Invalid Year Input');
  } else {
    console.log(name + '-' + obj.year);
  }

}

//  problem -no- 5

let incomeList = [3000, 5000, 1000];

function calculateMonthlyExpenses(incomeList, totalExpenses) {

  if (Array.isArray(incomeList) && typeof totalExpenses == 'number') {

  }
  else {
    console.log("Invalid Input");

  }

}
function calculateMonthlyExpenses(incomeList, totalExpenses) {
  let totalIncome = 0;

  for (let a of incomeList) {
    totalIncome = totalIncome + a;
  }
  let savedMoney = totalIncome - totalExpenses;

  if (savedMoney > 0) {
    console.log(savedMoney);
  } else {
    console.log('Save more money');
  }
}
console.log(calculateMonthlyExpenses([2000, 3000, 1500], 5000));
console.log(calculateMonthlyExpenses([1000, 2000], 3500));


