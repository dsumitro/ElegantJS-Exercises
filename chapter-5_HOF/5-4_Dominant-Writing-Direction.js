// Write a function that computes the dominant writing direction in a string of text.
//  Remember that each script object has a direction property that can be
//   "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
// The dominant direction is the direction of a majority of the characters
//  that have a script associated with them.
//  The characterScript and countBy functions defined earlier in the chapter
//  are probably useful here.
const { characterScript, countBy } = require('./chapter-snippets');

function dominantDirection(text) {
  // slightly modified top half of the textbook example
  const countedScripts = countBy(text, char => {
    const script = characterScript(char.codePointAt(0));
    return script ? script.direction : 'none';
  });
  // compares the number of characters being read in each direction
  // returns the dominant script and then return the direction only
  const dominantScript = countedScripts.reduce((a, b) =>
    a.count < b.count ? b : a
  );
  return dominantScript.name;
}

console.log(dominantDirection('Hello!'));
// → ltr
console.log(dominantDirection('Hey, مساء الخير'));
// → rtl
