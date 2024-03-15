//https://askjavascript.com/javascript-add-to-object/
let result = {};

const insertItem = (key, value) => {
  // insertItem the property with key and value into result
  result[key] = value;
  return key;
};

const deleteItem = (key) => {
  // remove the property with key from result
  delete result[key];
  return key;
};

const lookupItem = (key) => {
  // return the value from result that is associated with key
  if (result[key] !== undefined) {
    return result[key];
  }

  return "Item does not exist";
};

const printItems = () => {
  // return a string of the concatenated key in result, separated by commas
  let itemsString = "";
  const keys = Object.keys(result);
  let numKeys = keys.length;

  for (i = 0; i < numKeys; i++) {
    if (i === 0) {
      itemsString += keys[i];
    } else {
      itemsString += ", " + keys[i];
    }
  }

  return itemsString;
};

insertItem("hello", "world");
insertItem("lorem", "ipsum");
insertItem("sit", "amet");
console.log(printItems());
// expected: 'hello, lorem, sit' (order may be different)
console.log(lookupItem("lorem"));
// expected: 'ipsum'

deleteItem("lorem");
console.log(printItems());
// expected: 'hello, sit' (order may be different)
console.log(lookupItem("lorem"));
// expected: 'Item does not exist'
