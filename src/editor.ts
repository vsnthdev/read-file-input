/*
 *  Functions specific to the text editor for this project.
 *  Created On 05 December 2021
 */

import { execa } from 'execa'

import { ConfigImpl } from './config.js'
import { getTempFilePath } from './file.js'

// getEditor() decides which editor to be launched on different operating systems.
export const getEditor = ({ editor }: ConfigImpl): string => {
    // throw error if not interactive
    if (process.stdout.isTTY == false)
        throw new Error(`Non-interactive session, please implement a fallback.`)

    // implement operating system specific logic
    if (process.platform == 'win32') {
        // On Microsoft Windows we either use a custom provided
        // editor or fallback to the stock Notepad for compatibility
        // reasons
        editor = editor || 'notepad.exe'
    } else {
        // On all other POSIX compliant operating systems
        // if the consumer specifies a custom editor, we use that
        // other else we first check for the $VISUAL environment variable
        // or else fallback to $EDITOR environment variable
        editor = editor || process.env.VISUAL || process.env.EDITOR
    }

    // throw an error if there editor is empty
    if (!editor)
        throw new Error(
            `Could not determine the editor. Please set $VISUAL or $EDITOR or specify a custom editor in config.`,
        )

    return editor
}

export const openEditor = async (config: ConfigImpl) => {
    // spawn a new editor process
    const opened = execa(`${config.editor} "${getTempFilePath(config.name)}"`, {
        shell: true,
        stdin: config.noWait == false ? process.stdin : 'ignore',
        stderr: config.noWait == false ? process.stderr : 'ignore',
        stdout: config.noWait == false ? process.stdout : 'ignore',
    })

    // schedule a undef() if noWait is set to true
    if (config.noWait == true) setTimeout(() => opened.unref(), 500)

    // now let's wait until the editor has been opened
    await opened
}
