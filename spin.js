//SPIN WORDS

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.
// Examples:

// spinWords("Hey fellow warriors") => "Hey wollef sroirraw" 
// spinWords("This is a test") => "This is a test" 
// spinWords("This is another test") => "This is rehtona test"

function spinWords(str) {

    let lenthOfString = str.length;

    //convert the word/s to an array
    let arr = str.split(" ");
    // confirm that the input is now an array
    // console.log(arr)
    let newArr = []
    
    for(let i = 0; i < arr.length; i++) {
        let word = arr[i]
        // console.log(word)
        if(word.length >= 5) {
            let splitWord = word.split("");
            // console.log(splitWord)
            let reverseSplit = splitWord.reverse();
            // console.log(reverseSplit)
            word = reverseSplit.join("")
            // console.log(joinReverse)
            // joinReverse = arr[i]
            // console.log(word)
            word = arr[i]
            arr = arr.join(" ")
            console.log(arr);
        }
        // if(word.length >= 5){
        //     let splitWord = word.split(" ")
        //     console.log(words) 
        // }
    }
    // let word = words[i]

    // let newStrArray = []

    // words.forEach(function(word, i, words){
    //     if (newStrArray.indexOf(word) === -1) {
    //         newStrArray.push(word);
    //     }
    // });
    

    // for(let i = 0; i < lenthOfString - 1; i++) {
    //     if(word.length >= 5) {
    //         let splitWord = word.split("");
    //         console.log(splitWord);
    //         let reverseWord = splitWord.reverse();
    //         console.log(reverseWord);
    //     }
    // }
    
    // wordArray.forEach(function(word, index, wordArray){
    //     arr[index] = word
        
        
    //     if (word.length >= 5) {
    //         let splitWordArray = word.split("")
    //         console.log(splitWordArray);

    //         let reverseWord = splitWordArray.reverse();
    //         console.log(reverseWord);

    //         let joinReverseWord = reverseWord.join("");
    //         console.log(joinReverseWord);
            
            
            
    //     }else {
            
    //         return str
    //     }
        
    
    // });
}


console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));
console.log(spinWords("This is Reskill Americans"));
console.log(spinWords("Javascript"));
console.log(spinWords("Fun"));