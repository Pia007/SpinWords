//SPIN WORDS

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.
// Examples:

// spinWords("Hey fellow warriors") => "Hey wollef sroirraw" 
// spinWords("This is a test") => "This is a test" 
// spinWords("This is another test") => "This is rehtona test"

function spinWords(str) {

    //convert the string to an array
    let words = str.split(" ");

    // confirm that the input is now an array
    console.log(words)
    
    //get the length of the array 
    let lengthOfWords = words.length
    console.log(lengthOfWords)

    //using a for loop, check each word, i, in the array
    for(let i = 0; i < lengthOfWords; i++){
        //if a word the array has 5 or more letters
        if(words[i].length >= 5) {
            // split the word, reverse it, then join the letters
            words[i] = words[i].split('').reverse().join('');
        }
    }
    // Output: convert the array back a string and 
    return words.join(" ");
}


console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));
console.log(spinWords("This is Reskill Americans"));
console.log(spinWords("Javascript"));
console.log(spinWords("Fun"));