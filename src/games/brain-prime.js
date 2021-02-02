import { engine } from '../index.js';

const isPrime = (num) => {
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
    const question = Math.floor(Math.random() * 100);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    gameData.push([question, correctAnswer]);
  }
  return engine(gameDescription, gameData);
};

export default brainPrime;
