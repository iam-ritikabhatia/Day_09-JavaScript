// String ProtoTyping
// .match() method is used to find a matching pattern in a string

// Synatx

// console.log(string.match("anypattern"))

/*************** Example 01 ***************/

let myName = "Ram Sharma"
console.log(myName.match("yu"))

// This will return an array which has some key values like below

// [ 'yu', index: 2, input: 'Ram Sharma', groups: undefined ]

// 'yu' means the pattern which has to be matched

// index: 2 means what is the starting index number of the pattern, in "Piyush Sharma"
                                                                //      01234567891011   in this case the starting point of pattern 'yu' is 2

// input: 'Piyush Sharma' is the original string

// groups means that the capturing group of pattern (here pattern is 'yu')    in this case we have not define any capturing group name to the pattern 'yu'





/*************** Example 02 ***************/

let anotherName = "Ram Sharma"
console.log(anotherName.match( /(?<pattern_is>tia)/))  // In this case we give a capturing group name, pattern_is     

// We can assign any name to the capturing group

// Output is

// [ 'tia', 'tia', index: 10, input: 'Ram Sharma', groups: { pattern_is: 'tia'} ]

// here first tia means the entire pattern

// second tia means the pattern captured my the group name





/*************** Example 03 ***************/

let anAnotherName = "Divya DIVYA"
console.log(anAnotherName.match(/vya/i))  // here the pattern is vya, and i flag represents that ignore case sensitivity  

// Output is

// [ 'vya' ]

// In this case the search is case - insensitive

// And once the pattern is matched, the search will stop





/*************** Example 04 ***************/

let OneMoreAnotherName = "Divya DIVYA"
console.log(anAnotherName.match(/vya/gi))  // here the pattern is vya, i flag represents that ignore case sensitivity, g flag means global search 

// Output is

// [ 'vya', 'VYA' ]

// In this case the search is case - insensitive

// The search will done for entire input