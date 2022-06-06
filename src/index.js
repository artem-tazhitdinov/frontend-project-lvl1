import readlineSync from 'readline-sync';
import { getUserName } from './utils'

export const gameApplication = (gameRules, gameTask) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  
};
