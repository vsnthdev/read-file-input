/*
 *  Handles file operations specific to this project.
 *  Created On 05 December 2021
 */

import fs from 'fs/promises'
import osPaths from 'os-paths'
import path from 'path'

import { ConfigImpl } from './config'

const getTempFilePath = (name: string): string =>
    path.join(osPaths.temp(), name)

// creates a new file in the temp directory according
// to the configuration specified
export const create = async ({ name, content }: ConfigImpl): Promise<void> => {
    // create a temporary file
    const tempFilePath = getTempFilePath(name)
    const file = await fs.open(tempFilePath, 'w')

    // if there's a content block specified, we process accordingly
    if (content) {
        if (content.data) {
            // programmatically specifying the file content data
            // is always preferred over providing another file as template
            // as that is a bit faster
            await file.writeFile(content.data, 'utf-8')
        } else if (content.file) {
            // but in case the template file is static and lengthy
            // the library should also be able to read from that template
            // and generate a temporary file
            await file.writeFile(
                await fs.readFile(content.file, 'utf-8'),
                'utf-8',
            )
        }
    }

    // just so we don't conflict later, we immediately close the file
    // we have created
    await file.close()
}

// deletes the created file from the temp directory, if enabled in the config
const cleanup = async (): Promise<void> => {}

// reads the temp file text and returns back the utf-8 string
export const read = async (): Promise<string> => ''
