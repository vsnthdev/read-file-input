/*
 *  Entryfile for read-file-input project.
 *  Created On 05 December 2021
 */

import merge from 'deepmerge'

import { ConfigImpl } from './config.js'
import getEditor from './editor.js'

const defaults: ConfigImpl = {
    cleanup: true,
}

export default async (config: ConfigImpl = defaults): Promise<string> => {
    // merge the user provided overrides with the defaults
    config = merge(defaults, config)

    // if a filename was not provided, generate a random one
    // generate the temporary file
    // figure out which editor to use
    const editor = await getEditor(config.editor)

    // open the editor

    // capture input
    // delete the file

    return ''
}
