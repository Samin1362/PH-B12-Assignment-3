/** Problem 06 : (Current Salary ) */
var experience = 40;
var startingSalary = 30000;
//write your code here

var newSalary = 0;

for (var i=1; i<=experience; i++){
  if (i === 1){
    var inc = startingSalary * 5 / 100;
    newSalary = startingSalary + inc; 
  } else {
    var incr = newSalary * 5 / 100;
    newSalary += incr;
  }
}

console.log(newSalary.toFixed(2));