#!/usr/bin/env node
import { brainEven } from '../src/games/brain-even.js';
import { intro, circleCount } from '../src/index.js';

console.log(intro);
brainEven(circleCount);
