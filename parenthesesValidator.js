// A checker that validates if all parentheses in a string are properly nested and closed

// error handling
  // return false if string includes an open or close parenthesis but not the other
  // return true if string has no parenthesis at all
  // else ensure that all parentheses have a matching open or closing

// ** PSEUDOCODE ** 
// create a function that takes in a string and returns a boolean
// create test cases through jest for error handling, ensure that code passes tests
// include error handling at beginning (one parentheses and not the other, no parentheses at all)
// else error handling doesn't return anything, begin algorithm
// need to ensure an opening parenthesis has a matching closing parenthesis
  // iterate over string array, if there is an open parenthesis, push it into the end of a new array to check later
  // if there is a closing parenthesis, check the end of new array to ensure it has a corresponding open parenthesis
    // if not, the string doesn't pass the tests and function returns false
    // if there is a corresponding parenthesis, pop it off the end of the new array to account for closing parenthesis
// ultimately, the new array should be empty (meaning all parentheses have correspodning parentheses)
  // if new array == 0, return true, else return false


const parenthesesValidator = (str) => {
  // error handling in beginning
  if ((str.includes("(") == true) && (str.includes(")") == false)) {
    return false;
  }
  else if ((str.includes(")") == true) && (str.includes("(") == false)) {
    return false;
  }
  else if ((str.includes(")") == false) && (str.includes("(") == false)) {
    return true;
  }
  else {
    // split input string into an array
    let strArray = str.split("");
    
    // initialize an array to push open parentheses into
    let openParenthesesArray = [];

    // loop over strArray
    for (let i = 0; i < strArray.length; i++) {
      // if value at index equals an open parenthesis, push it to new array
      if (strArray[i] == "(") {
        openParenthesesArray.push(strArray[i]);
      }
      // if value at index equals a closed parenthesis, ensure that new array has a correlating open parenthesis at the end
      // if not, return false, if it does, pop off the correlating parenthesis and continue checking
      else if (strArray[i] == ")" && openParenthesesArray[openParenthesesArray.length - 1] != "(") {
        return false;
      }
      else if (strArray[i] == ")" && openParenthesesArray[openParenthesesArray.length - 1] == "(") {
        openParenthesesArray.pop();
      }
    }
  
  // array including open parenthesis should be empty if all parentheses correlate
  // returns false if array is not empty, true otherwise
  return openParenthesesArray.length == 0;
  }
};

module.exports = parenthesesValidator;