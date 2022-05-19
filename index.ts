#!/usr/bin/env node
import shutdown from './src/shutdown';

// import yargs from 'yargs'
// import { hideBin } from 'yargs/helpers'
// import show from './src/show'

// yargs(hideBin(process.argv))
//   .command('show', '', () => { }, (argv) => {
//     show.show('123')
//   })
//   .command('test', '', () => { }, (argv) => {
//     console.info('test')
//   })
//   .command('hello', '', () => { }, (argv) => {
//     console.info('hello')
//   })
//   .command('show2', '', () => { }, (argv) => {
//     console.info('show2F')
//   })
//   .demandCommand(1)
//   .parse()
shutdown(20)
