

function checkNumber(number) {
    return new Promise((resolve, rejected) => {  // Callback funtion could be written outside here
        if (number % 2 === 0) {
            resolve(`${number} is an even number.`)
        } else {
            rejected(`${number} is an odd number`)
        }
    });
}

const numberToCheck = 8; //odd

// .then() -> The callback to execute when the Promise is resolved.
// then -> Resolve | catch -> Rejected

checkNumber(numberToCheck).then((message) => {
    console.log(`Success: ${message}`);
}).catch(error => {
    console.error(`Error: ${error}`); // Or console.log()
}); 