#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { brainEven } from '../src/brain-even.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

brainEven(name);
