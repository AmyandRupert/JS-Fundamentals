const argument= process.argv.slice(2); // remove first 2 default items

if (argument[0] == undefined) {
  console.log("No argument");
} else {
  console.log(argument[0]);
}
