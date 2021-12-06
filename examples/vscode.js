/*
 *  Using read-file-input to open Visual Studio Code and take user input.
 *  Created On 06 December 2021
 */

import readFi from '../dist/read-file-input.js'

const read = await readFi({
    editor: 'code -n -w',
})

console.log('Read input as:')
console.log(read)
