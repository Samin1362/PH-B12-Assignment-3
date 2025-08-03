/** Problem 04 - (Delete / Store) */
var fileName= "#exp.mp4";
//write your code here

var splited = fileName.split(".");

if (splited[1] === "pdf" || splited[1] === "docx" || fileName[0] === "#") {
  console.log("Store");
} else {
  console.log("Delete");
}