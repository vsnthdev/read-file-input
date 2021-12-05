/*
 *  Entryfile for read-file-input project.
 *  Created On 05 December 2021
 */

import merge from 'deepmerge'
import { nanoid } from 'nanoid'

import { ConfigImpl } from './config.js'
import { getEditor, openEditor } from './editor.js'
import { create } from './file.js'

const defaults: ConfigImpl = {
    cleanup: true,
    name: `${nanoid(5)}.txt`,
}

export default async (config: ConfigImpl = defaults): Promise<string> => {
    // merge the user provided overrides with the defaults
    config = merge(defaults, config)

    // generate the temporary file
    await create(config)

    // figure out which editor to use
    config.editor = getEditor(config)

    // open the editor
    await openEditor(config)

    // capture input
    // delete the file

    return ''
}
