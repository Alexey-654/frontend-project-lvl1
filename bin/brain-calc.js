#!/usr/bin/env node
import { brainCalc } from '../src/games/brain-calc.js';
import { intro, circleCount } from '../src/index.js';

console.log(intro);
brainCalc(circleCount);
