#!/usr/bin/env node
import { brainProgression } from '../src/games/brain-progression.js';
import { intro, circleCount } from '../src/index.js';

console.log(intro);
brainProgression(circleCount);
