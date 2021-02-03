import { engine, generateRandomInt } from '../index.js';

const generateProgression = (length) => {
  const startNumber = generateRandomInt(1, 50);
  const step = generateRandomInt(1, 10);
  const progressionNumbers = [];
  for (let i = startNumber, b = 0; b < length; i += step, b += 1) {
    progressionNumbers.push(i);
  }
  return progressionNumbers;
};

export const brainProgression = (circleCount) => {
  const gameDescription = 'What number is missing in the progression?';
  const gameData = [];
  for (let i = 0; i < circleCount; i += 1) {
    const length = 10;
    const progressionNumbers = generateProgression(length);
    const missedItem = generateRandomInt(0, length - 1);
    const correctAnswer = String(progressionNumbers[missedItem]);
    progressionNumbers[missedItem] = '..';
    const question = progressionNumbers.join(' ');
    gameData.push([question, correctAnswer]);
  }
  return engine(gameDescription, gameData);
};

export default brainProgression;
