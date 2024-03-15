const replaceItems = (input) => {
  // return a string with 'gold' replaced by 'SHINY' and 'wander' replaced by 'roam', regardless of the case of the letters

  // for reference, see the MDN "Regular Expressions" and "matchAll()" entries:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
  const goldRegex = /gold/gi;
  const wanderRegex = /wander/gi;
  const shiny = "SHINY";
  const roam = "roam";

  input = input.replaceAll(goldRegex, shiny);
  input = input.replaceAll(wanderRegex, roam);

  return input;
};

console.log(replaceItems("All that is gold does not glitter"));
// expected: 'All that is SHINY does not glitter'
console.log(replaceItems("Wisdom is better than silver or GOLD."));
// expected: 'Wisdom is better than silver or SHINY.'
console.log(replaceItems("Not all those who Wander are lost"));
// expected: 'Not all those who roam are lost'
