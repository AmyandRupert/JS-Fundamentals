const argument= parseInt (process.argv.slice(2)); // remove first 2 default items

    if (isNaN(argument)) {
      console.log("Not a number");
    } else {
      console.log(`My number: ${argument}`);
    }
