import { engine, generateRandomInt } from '../index.js';

const getGcd = (number1, number2) => {
  const smallNum = number1 < number2 ? number1 : number2;
  if (number1 % number2 === 0) {
    return String(smallNum);
  }
  let i = Math.floor(smallNum / 2);
  for (i; i > 1; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      return String(i);
    }
  }
  return String(1);
};

export const brainGcd = (circleCount) => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  const gameData = [];

  for (let i = 0; i < circleCount; i += 1) {
    const randomNumber1 = generateRandomInt();
    const randomNumber2 = generateRandomInt(1, 50);
    const question = `${randomNumber1} ${randomNumber2}`;

    const correctAnswer = getGcd(randomNumber1, randomNumber2);
    gameData.push([question, correctAnswer]);
  }

  return engine(gameDescription, gameData);
};

export default brainGcd;
