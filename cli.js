#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { generate } from './index.js';

yargs(hideBin(process.argv))
  .command(
    'generate <prompt>',
    'Generate text from a prompt',
    (yargs) => {
      return yargs.positional('prompt', {
        describe: 'The prompt to generate text from',
        type: 'string',
      });
    },
    async (argv) => {
      const result = await generate(argv.prompt);
      console.log(result);
    }
  )
  .demandCommand(1)
  .parse();
