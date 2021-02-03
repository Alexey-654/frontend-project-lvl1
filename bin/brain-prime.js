#!/usr/bin/env node
import { brainPrime } from '../src/games/brain-prime.js';
import { intro, circleCount } from '../src/index.js';

console.log(intro);
brainPrime(circleCount);
