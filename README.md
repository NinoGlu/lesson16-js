// Task 1:
function oddOrEven(number) {
    if((number % 2) !== 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(oddOrEven(28));
console.log(oddOrEven(17));


// Task 2:




// Task 3:
function upperToLower(text) {
    let textResult = text.toLowerCase();
    console.log(textResult);
}

upperToLower("MY NAME IS JOHN");
upperToLower("I AM BULLETPROOF!")

// let text = "MY NAME IS JOHN";
// text_2 = text.toLowerCase();
// console.log(text_2);


// Task 4:
function filterArray(numArray) {
    const result = numArray.filter(number => number % 2 == 0);
    console.log(result);
}

numArray = [4, 6, 1, 3, 7, 13, 14];
filterArray(numArray);


// const result = numArray.filter(number => number % 2 == 0);
// console.log(result);


// Task 5: 
function findObject(objArray, stringText) {
    myObj = objArray.find(obj => obj.name === "First Object.");
    return myObj;
}

let obj_1 = {name : "First Object."};

let obj_2 = {name : "Second Object."};

let obj_3 = {name : "Third Object."};

const objArray = [obj_1, obj_2, obj_3];

console.log(findObject(objArray));