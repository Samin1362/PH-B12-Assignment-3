/** Problem -01 ( Divide the Asset ) */
var area = 100;
//write your code here

console.log(area/2);

/** Problem -02 ( Cycle or Laptop ) */
var money = 9999;
//write your code here

if (money >= 25000){
  console.log("Laptop");
} else if (money >= 10000){
  console.log("Cycle");
} else {
  console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 6;
//write your code here


for (var i=1; i<=lastDay; i++){
  if (i%3 === 0){
    console.log(i + " - medicine");
    continue;
  }
  console.log(i + " - rest")
}

