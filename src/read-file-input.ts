/*
 *  Entryfile for read-file-input project.
 *  Created On 05 December 2021
 */

import merge from 'deepmerge'
import { nanoid } from 'nanoid'

import { ConfigImpl } from './config.js'
import getEditor from './editor.js'

const defaults: ConfigImpl = {
    cleanup: true,
    name: `${nanoid(5)}.txt`,
}

export default async (config: ConfigImpl = defaults): Promise<string> => {
    // merge the user provided overrides with the defaults
    config = merge(defaults, config)

    // generate the temporary file
    // figure out which editor to use
    config.editor = await getEditor(config.editor)

    // open the editor

    // capture input
    // delete the file

    return ''
}
