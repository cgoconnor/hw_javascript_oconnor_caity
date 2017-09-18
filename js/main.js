var iceCream = ['mint chocolate chip', 'moose tracks', 'rocky road'];
iceCream.push('raspberry chocolate chip');
var barackObama = {
    firstName: 'Barack',
    lastName: 'Obama',
    termLength: 2,
    party: 'Democrat',
    yearsOfPresidency: 8
};

var georgeWBush = {
    firstName: 'George W.',
    lastName: 'Bush',
    termLength: 2,
    party: 'Republican',
    yearsOfPresidency: 8
};

var billClinton = {
    firstName: 'Bill',
    lastName: 'Clinton',
    termLength: 2,
    party: 'Democrat',
    yearsOfPresidency: 8
};

var georgeBush = {
    firstName: 'George H.W.',
    lastName: 'Bush',
    termLength: 1,
    party: 'Republican',
    yearsOfPresidency: 4
};

var ronaldReagan = {
    firstName: 'Ronald',
    lastName: 'Reagan',
    termLength: 2,
    party: 'Republican',
    yearsOfPresidency: 8
};

var presidents = [
    barackObama,
    georgeWBush,
    billClinton,
    georgeBush,
    ronaldReagan
];

console.log(presidents[1].firstName + ' ' + presidents[1].lastName);

function howdy() {
    console.log("Caity G. O'Connor says hi!");
}

howdy();

var numba = function (string) {
    if (string.length < 7) {
        console.log('What a short little word!');
    } else {
        if (string.length > 7) {
            console.log("I'm sorry, but that's too many to count.");
        } else {
            console.log('7, what a perfect choice!');
        }
    }
};

numba('7');
numba('seventy');
numba('university');
