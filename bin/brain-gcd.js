#!/usr/bin/env node
import { brainGcd } from '../src/games/brain-gcd.js';
import { intro, circleCount } from '../src/index.js';

console.log(intro);
brainGcd(circleCount);
