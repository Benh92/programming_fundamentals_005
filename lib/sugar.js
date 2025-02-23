// =============== PART 1 - Advanced Objects ================

/*
  This function receives an object and returns the number 
  of key-value pairs (properties) in the object.
*/
function size(object) {
  return Object.keys(object).length;
}

/*
  This function receives an object, whose values will all be numbers, and returns the smallest number in the object.
*/
function min(object) {
  const values = Object.values(object);
  let currSmallest = values[0];
  values.forEach(function (n) {
    if (n < currSmallest) {
      currSmallest = n;
    }
  });
  return currSmallest;
}

/*
  This function receives an object, whose values will all be numbers, and returns the largest number in the object.
*/
function max(object) {
  const maxValues = Object.values(object);
  let currLargest = maxValues[0];
  maxValues.forEach(function (n) {
    if (n > currLargest) {
      currLargest = n;
    }
  });
  return currLargest;
}

/*
  This function receives an object, and will return a clone of this object - i.e. a new object with the same key-value pairs.
*/
function clone(object) {
  const newClone = Object.assign({}, object);
  return newClone;
}


/*
  This function receives an object and returns the value for the given key.
  If the key does not exist it returns undefined.
*/
// receive key -> use key to define value -> return value

function get(object, key) {
  for (let key in object);
  return object[key];

}


/*
  This function will receive an object and a key, and will return true if the object has the given key, and false if not.
*/
function has(object, key) {
  for (let key in object);
  if (key in object) {
    return true;
  } else {
    return false;
  }
}

/*
  This function receives an object, whose values will all be numbers, and returns the sum of all these numbers.
*/
function sum(object) {
  let sum = 0;
  for (let key in object) {
    const value = object[key];
    if (typeof value === 'number') {
      sum += value;
    }
  }
  return sum;
}
// sum += object[key];
// return summ

/*
  This function receives an object and will return a new object with the keys and values inverted. See the tests for examples of this.
*/
function invert(object) {
  var newObj = {};
  for (let key in object) {
    newObj[object[key]] = key;
  }
  return newObj;
}

/*
  This function reveives an array of objects. It should return a single object, which is a combination of all the objects in the array.
*/
function addAll(arr) {
  let newObj = {};
  arr.forEach(function (item) {
    newObj = Object.assign(newObj, item);
  });
  return newObj;
}


// ** Can you help me to understand how 
//to check all keys on this solution? **

//   const newObj = arr.reduce(function(result, item) {
//     var key = Object.keys(item)[0];
//     result[key] = item[key];
//     return result;
//   }, {});
//   return newObj;
// }



// =============== PART 2 - Functions as Values ================

/*
  This function allows you to find a value from an object which fulfils a criteria. It receives an object and a matcher function. It should test each value in the object against the matcher function and if a matching value is found, the value should be returned. Otherwise, return null.
*/
function find(obj, matcherFunc) {
  for (let key in obj) {
    let value = obj[key]
    const matcherResult = matcherFunc(value)
    if (matcherResult === true) {
      return value;
    }
  }
  return null;
}


/*
  This function allows you to test whether every value in an object matches a certain criteria. For example, is every value greater than 100? The function receives an object and a tester function. If all values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function every(obj, func) { 
  for (let key in obj) {
    let value = obj[key]
    const funcResult = func(value)
    if (funcResult === false) {
      return false;
    }
  }
  return true;
}


/*
  This function allows you to test whether some values in an object match a certain criteria. For example, are at least some of the values greater than 100? The function receives an object and a tester function. If at least 1 of the values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function some(obj, func) { 
  for (let key in obj) {
    let value = obj[key]
    const funcResult = func(value)
    if (funcResult === true) {
     return true;
    }
  }
return false;
}


function setUpGlobalObject() {
  Object.size = size;
  Object.min = min;
  Object.max = max;
  Object.clone = clone;
  Object.get = get;
  Object.has = has;
  Object.sum = sum;
  Object.invert = invert;
  Object.addAll = addAll;
  Object.find = find;
  Object.every = every;
  Object.some = some;
}

module.exports = setUpGlobalObject;
