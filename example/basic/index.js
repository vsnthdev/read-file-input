/*
 *  A simple example where content is directly passed to
 *  the editor.
 *  Created On 05 December 2021
 */

import readFi from '../../dist/read-file-input.js'

const read = await readFi()

console.log('Read input as:')
console.log(read)
