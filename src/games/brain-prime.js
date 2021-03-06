import { engine, generateRandomInt } from '../index.js';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const brainPrime = (circleCount) => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gameData = [];
  for (let i = 0; i < circleCount; i += 1) {
    const question = generateRandomInt();
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    gameData.push([question, correctAnswer]);
  }
  return engine(gameDescription, gameData);
};

export default brainPrime;
