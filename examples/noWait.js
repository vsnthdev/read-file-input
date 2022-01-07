/*
 *  Example of not waiting for user input using read-file-input.
 *  Created On 08 January 2022
 */

import dirname from 'es-dirname'
import path from 'path'

import readFi from '../dist/read-file-input.js'

await readFi({
    noWait: true,
    content: {
        file: path.join(dirname(), 'basic.js'),
    },
})

console.log('done')
