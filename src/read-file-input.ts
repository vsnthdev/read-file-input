/*
 *  Entryfile for read-file-input project.
 *  Created On 05 December 2021
 */

import merge from 'deepmerge'
import { nanoid } from 'nanoid'

import { ConfigImpl } from './config.js'
import { getEditor, openEditor } from './editor.js'
import { cleanup, create, read } from './file.js'

const defaults: ConfigImpl = {
    cleanup: true,
    noWait: false,
    name: '[id].txt',
}

export default async (config: ConfigImpl = defaults): Promise<string> => {
    // merge the user provided overrides with the defaults
    config = merge(defaults, config)

    // apply a random string to the file name
    // to prevent conflicting with exiting temp files
    // or multiple CLIs using this library
    config.name = config.name.replace('[id]', nanoid(5))

    // generate the temporary file
    await create(config)

    // figure out which editor to use
    config.editor = getEditor(config)

    // open the editor
    await openEditor(config)

    // capture input
    const userInput = await read(config)

    // delete the file as we took the user input
    await cleanup(config)

    return userInput
}
