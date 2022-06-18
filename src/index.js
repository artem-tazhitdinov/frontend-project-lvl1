import { getUserName, getUserAnswer } from './utils.js';

const gameRounds = 3;

const runGameApp = (gameRule, getGameTask) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  console.log(gameRule);

  for (let i = 0; i < gameRounds; i += 1) {
    const [gameQuestion, correctAnswer] = getGameTask();
    console.log(`Question: ${gameQuestion}`);

    const userAnswer = getUserAnswer();
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGameApp;
