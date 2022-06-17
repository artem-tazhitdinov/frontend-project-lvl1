import runGameApp from '../index.js';
import { getRandomByRange } from '../utils.js';

const createProgression = (step, beginFrom, missingStep) => {
  const progItems = [];
  progItems.push(beginFrom);

  for (let i = 0; i < 9; i += 1) {
    progItems.push(progItems[i] + step);
  }

  const valueOfMissingStep = progItems[missingStep].toString();
  progItems[missingStep] = '..';
  return [progItems.join(' '), valueOfMissingStep];
};

const gameRule = 'What number is missing in the progression?';

const getGameTask = () => {
  const progStep = getRandomByRange(15);
  const progBegin = getRandomByRange();
  const missingStep = getRandomByRange(10);

  const [gameQuestion, correctAnswer] = createProgression(progStep, progBegin, missingStep);
  return [gameQuestion, correctAnswer];
};

const progressionGame = () => {
  runGameApp(gameRule, getGameTask);
};

export default progressionGame;
