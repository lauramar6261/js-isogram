const isIsogram = function isIsogram(text) {
  let answer;
  if ((text === '') || (text.length === 1)) {
    answer = true;
  }
  const letters = {};
  // remove hyphen of space before looping for text

  text.replace('-', '').replace(' ', '').toUpperCase().split('')
    .forEach((letter) => {
      letters[letter] = 0;
    });
  if (Object.keys(letters).length === text.replace(' ', '').replace('-', '').length) {
    answer = true;
  } else {
    answer = false;
  }
  // console.log(letters);
  // console.log(text);
  return answer;
};

export default isIsogram;
