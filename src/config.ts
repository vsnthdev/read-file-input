/*
 *  Contains code related to configuration of this library.
 *  Created On 05 December 2021
 */

export interface ConfigImpl {
    // the name of the file created, defaults to "[id].txt"
    // where [id] is replaced with a random 5 character string
    // to prevent conflicts
    name?: string

    // a custom editor command which defaults to notepad.exe on Windows
    // and uses the $VISUAL & $EDITOR environment variables on Linux & macOS
    editor?: string

    // whether to delete the file after the input has been read
    // defaults to true and recommended to keep it that way
    cleanup?: boolean

    // do not wait for the editor to be closed, just return
    // as soon as the editor has opened, useful to just show
    // some content rather than taking inputs
    noWait?: boolean

    // the content that the temporary file should be pre-filled with
    // undefined by default
    content?: {
        // the string of data which will be pre-filled onto the
        // temporary file, will override the file setting
        data?: string

        // path to a file from which the content will be read
        // for generating the temporary file
        // useful for passing large amount of data for the temporary file
        file?: string
    }
}
