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
