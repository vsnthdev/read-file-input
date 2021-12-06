/*
 *  Example using a file as a template for read-file-input.
 *  Created On 06 December 2021
 */

import dirname from 'es-dirname'
import path from 'path'

import readFi from '../dist/read-file-input.js'

const read = await readFi({
    content: {
        file: path.join(dirname(), 'basic.js'),
    },
})

console.log('Read input as:')
console.log(read)
