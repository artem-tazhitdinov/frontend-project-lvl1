import { getUserName, getUserAnswer } from './utils.js';

export const gameApplication = (gameRules, gameTask) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);

  for (let i = 0; i < 3; i += 1) {
    const [gameQuestion, correctAnswer] = gameTask();
    console.log(gameQuestion);

    const userAnswer = getUserAnswer();
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};
