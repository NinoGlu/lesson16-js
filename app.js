// Task 1:
function oddOrEven(number) {
    if((number % 2) !== 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(oddOrEven(51));
console.log(oddOrEven(40));

//or
function getRandomInt(max){
  return Math.floor(Math.random ()*max);  
}

function num(number){
  if(number%2===0){
    return true;
  }else {
    return false;
  }
}
console.log(num(getRandomInt(91)));

// Task 2:
function getCurrencySymbolFromCode(currency) {
    if (currency == " USD") {
        return "$";
    }
    else if (currency == "EUR") {
        return "€";
    } else if (currency == "GEL") {
        return "₾";
    } else {
        return "undefined";
    }
}

console.log(getCurrencySymbolFromCode("USD"));
console.log(getCurrencySymbolFromCode("EUR"));
console.log(getCurrencySymbolFromCode("GEL"));

// ეს 
//const str1 = '1 €';
//const str2 = '2 $';
//const str3 = '3 ₾';
//function getCurrencySymbol(str) {
  //replace all numbers, spaces, commas, and periods with an empty string
  //we should only be left with the currency symbols
//  return str.replace(/[\d\., ]/g, '');
//}
//console.log(getCurrencySymbol(str1));
//console.log(getCurrencySymbol(str2));
//console.log(getCurrencySymbol(str3))

// Task 3:
function upperToLower(text) {
    let textResult = text.toLowerCase();
    console.log(textResult);
}

upperToLower("MY NAME IS JOHN");

// Task 4:
function filterArray(numArray) {
    const result = numArray.filter(number => number % 2 == 0);
    console.log(result);
}

numArray = [ 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 15, 17 ];
filterArray(numArray);

// Task 5: 
function findObject(objArray, stringText) {
    myObj = objArray.find(obj => obj.name === "First Object.");
    return myObj;
}

let obj_1 = {name : "First Object."};

let obj_2 = {name : "Second Object."};

const objArray = [obj_1, obj_2,];

console.log(findObject(objArray));