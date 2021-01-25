import readlineSync from 'readline-sync';

export const circleCount = 3;
export const intro = 'Welcome to the Brain Games!';

export const engine = (gameDescription, gameData) => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);

  for (let i = 0; i < circleCount; i += 1) {
    const [question, correctAnswer] = gameData[i];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
