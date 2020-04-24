// jshint esversion: 6

let revWord = (word) => {
  return word.split('').reverse().join('');
};

//3a. accepts a sentence and returns the string in reverse
let revWords1 = (str) => {
  let arr = str.split(' ');
  let result = '';
  for (var i = 0; i < arr.length; i++) {
    let currentWord = arr[i];
    let reversedWord = revWord(currentWord);
    result = result + ' ' + reversedWord;
  }
  return result;
};

//3b. rewrite with for each
let revWords2 = (str) => {
  let arr = str.split(' ');
  let result = '';
  arr.forEach((char)=> {
    let reversedWord = revWord(char);
    result = result + ' ' + reversedWord;
  });
  return result;
};

//3c. rewrite with for in
let revWords3 = (str) => {
  let arr = str.split(' ');
  let result = '';
  for (char of arr){
    let reversedWord = revWord(char);
    result = result + ' ' + reversedWord;
  }
  return result;
};

/*
let containsDuplicates = s => {
  let charCount = new Array(3).fill(0);
  for (let i in charCount) {
    let code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (charCount[code] > 0) {
      return true;
    } else {
      charCount[i]++;
    }
  }
  return false;
};
*/
