/*
 *  Entryfile for  read-file-input project.
 *  Created On 05 December 2021
 */

import merge from 'deepmerge'

import { ConfigImpl } from './config'

const defaults: ConfigImpl = {
    cleanup: true,
}

export default async (config: ConfigImpl = defaults): Promise<string> => {
    // merge the user provided overrides with the defaults
    config = merge(defaults, config)

    // 1. figure out which editor to use
    // 2. if a filename was not provided, generate a random one
    // 3. generate the temprory file
    // 4. open the editor
    // 5. capture input
    // 6. delete the file
    console.log(config)

    return ''
}
