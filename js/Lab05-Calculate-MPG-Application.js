// GLOBAL VARIABLES
let miles;
let gallons;
let mpg;
let again = 'y';

do {
    // COLLECT VALUES FROM THE USER
    miles = parseFloat(prompt('Enter miles driven'));
    gallons = parseFloat(prompt('How many gallons does your car\'s tank hold'));

    // DISPLAY RESULT
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons;
        console.log(`Your car gets ${mpg.toFixed(2)} miles per gallon.`);
    } else {
        alert('One or both entries are invalid.');
    }

    // ASK USER IF THEY WANT TO RUN THE APP AGAIN
    do {
        again = prompt('Run application again? (y or n)', 'y').toLowerCase();
    } while (!(again == 'n' || again == 'y'));
    
} while (again === 'y');
console.log('Application has exited.');