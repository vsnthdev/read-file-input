/*
 *  Entryfile for  read-file-input project.
 *  Created On 05 December 2021
 */

interface ConfigImpl {
    editor?: string
    name?: string
    content?: {
        file?: string
        data?: string
    }
}

export default async (config: ConfigImpl): Promise<string> => {
    return ''
}
