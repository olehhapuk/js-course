const vowels = ['a', 'e', 'i', 'o', 'u'];

function countVowels(str) {
  let vowelsCount = 0;
  for (let i = 0; i < str.length; i++) {
    const character = str[i];
    if (vowels.includes(character.toLowerCase())) {
      vowelsCount++;
    }
  }

  console.log(`Vowels count for ${str} = ${vowelsCount}`);
}

countVowels('Hello, World!');
countVowels('HELLO, WORLD!');

function reverseString(str) {
  const arr = str.split('');
  const reversedArr = arr.reverse();
  const finalStr = reversedArr.join('');
  console.log(finalStr);

  console.log(str.split('').reverse().join(''));
}

reverseString('Hello');
