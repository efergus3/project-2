// jshint esversion: 6

//3a. accepts a sentence and returns the string in reverse
let revWords1 = (str) => {
  let arr = str.split(" ");
  let result = "";
  for (var i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
};

//3b. rewrite with for each
let revWords2 = (str) => {
  let arr = str.split("");
  let result = "";
  arr.forEach((char)=> {
    result = char + result;
  });
  return result;
};

//3c. rewrite with for in
let revWords3 = (str) => {
  let arr = str.split("");
  let result = "";
  for (char of arr){
    result = char + result;
  }
  return result;
};


let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};
