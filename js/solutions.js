console.log('JS is working'); 


///////////////// HOMEWORK ////////////////////

// 1. // 
// Function parameters are the names listed in the function's definition. // 

// 2. // 
// Function arguments are the real values passed to the function. // 

// 3. // 
// Console.log will display the parameter in the console. // 
// Return statement will stop executing the function and return the specified value. // 

////////////// COMMIT 001 ///////////


//// PALINDROME //// 

// Write a function checkPalindrome that accepts a single argument, a string.

// The function should return true (Boolean) if the string is a palindrome, false if it is not.

// Make sure your function will give the correct answer for words with capital letters.

const checkPalindrome = (cut) => {
  const lowerCase = cut.toLowerCase(); 
  console.log(lowerCase);
  const splitString = lowerCase.split('');
  console.log(splitString);
  const arr1 = splitString.reverse();
  console.log(arr1);
  const reversedString = arr1.join("");
  console.log(reversedString);

  if (cut === reversedString){
    
    return true;
  
  } else {
    
    return false;
  }


}

console.log(checkPalindrome("radar"));



















