/*
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }*/


/* Write an ES2015 Version */
function filterOutOdds(...values){

    return Array.from(values).filter(val => {return val % 2 === 0;});
}

/*
findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1
*/
function findMin(...values){
    return Array.from(values).reduce((min, val) => {return min > val? val:min;});
}

/* 
mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}
*/
function mergeObjects(obj1, obj2){
    return {...obj1, ...obj2};
}

/*
doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]
*/

function doubleAndReturnArgs(arr, ...values) {
    const addNewValues= values.map(val => {return val*2;});
    return [...arr, ...addNewValues];
}

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    const idx = Math.floor(Math.random() * items.length());
    return [...items.slice(0, idx), ...items.slice(idx+1)]
}
/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    return {...obj, [key]:val}; //why need a bracket for the key???
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obj1, ...obj2};
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    return {...obj, [key]:val};
}
