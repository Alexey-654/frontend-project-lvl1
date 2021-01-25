import { engine } from '../index.js';

export const brainEven = (circleCount) => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameData = [];

  for (let i = 0; i < circleCount; i += 1) {
    const question = Math.floor(Math.random() * 100);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    gameData.push([question, correctAnswer]);
  }

  return engine(gameDescription, gameData);
};

export default brainEven;
