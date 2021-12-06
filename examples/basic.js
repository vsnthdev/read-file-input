/*
 *  A basic example of using read-file-input.
 *  Created On 05 December 2021
 */

// import readFileInput from 'read-file-input'
import readFi from '../dist/read-file-input.js'

// read from the user with zero configuration
const read = await readFi()

// print the input we have read
console.log('Read input as:')
console.log(read)
