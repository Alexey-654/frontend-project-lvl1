import { engine } from '../index.js';

const calc = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return String(number1 + number2);
    case '-':
      return String(number1 - number2);
    case '*':
      return String(number1 * number2);
    default:
      return `Error - "${operator}" is not expected in this function`;
  }
};

export const brainCalc = (circleCount) => {
  const gameDescription = 'What is the result of the expression?';
  const gameData = [];
  for (let i = 0; i < circleCount; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 100);
    const randomNumber2 = Math.floor(Math.random() * 100);
    const operators = ['+', '-', '*'];
    const randomItem = Math.floor(Math.random() * operators.length);
    const question = `${randomNumber1} ${operators[randomItem]} ${randomNumber2}`;
    const correctAnswer = calc(randomNumber1, randomNumber2, operators[randomItem]);
    gameData.push([question, correctAnswer]);
  }
  return engine(gameDescription, gameData);
};

export default brainCalc;
