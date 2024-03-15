const formatItems = (input) => {
  // return a string of the concatenated numbers, separated by commas and with three digits after the decimal point

  // for reference, see the MDN Number page:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

  let numString = "";
  const arrayLength = input.length;

  for (let i = 0; i < arrayLength; ++i) {
    const num = String(input[i]);
    const decimalIndex = num.indexOf(".");
    //number already in floating point form
    if (decimalIndex !== -1) {
      const numLength = num.length;
      const decimalToLastIndex = numLength - 1 - decimalIndex;
      //more than 3 digits after decimal place in original number
      if (decimalToLastIndex > 3) {
        const lastIndex = decimalIndex + 4;
        const finalNumber = num.substring(0, lastIndex);
        if (i === 0) {
          numString += finalNumber;
        } else {
          numString += ", " + finalNumber;
        }
      }
      //exactly 3 digits after the decimal point in original number
      else if (decimalToLastIndex === 3) {
        if (i === 0) {
          numString += num;
        } else {
          numString += ", " + num;
        }
      }
      //exactly 2 digits after the decimal point in original number
      else if (decimalToLastIndex === 2) {
        if (i === 0) {
          numString += num + "0";
        } else {
          numString += ", " + num + "0";
        }
      }
      //exactly 1 digit after the decimal point in original number
      else if (decimalToLastIndex === 1) {
        if (i === 0) {
          numString += num + "00";
        } else {
          numString += ", " + num + "00";
        }
      }
    }
    //integer
    else {
      if (i === 0) {
        numString += num + ".000";
      } else {
        numString += ", " + num + ".000";
      }
    }
  }

  input = numString;
  return input;
};

console.log(formatItems([1, 4, 17, 26, 41]));
// expected: '1.000, 4.000, 17.000, 26.000, 41.000'
console.log(formatItems([34.0, 12.0, 13.7, 760.1, 10.5]));
// expected: '34.000, 12.000, 13.700, 760.100, 10.500'
console.log(formatItems([235.235778, 1.2346789, 14.7, 97.3, 714.1245678]));
// expected: '235.236, 1.235, 14.700, 97.300, 714.125'
