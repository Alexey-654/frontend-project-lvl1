import { engine } from '../index.js';

const generateProgression = (length) => {
  const startNumber = Math.floor(Math.random() * 50);
  const step = Math.floor(Math.random() * 10);
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
    const missedItem = Math.floor(Math.random() * length);
    const correctAnswer = String(progressionNumbers[missedItem]);
    progressionNumbers[missedItem] = '..';
    const question = progressionNumbers.join(' ');
    gameData.push([question, correctAnswer]);
  }
  return engine(gameDescription, gameData);
};

export default brainProgression;
