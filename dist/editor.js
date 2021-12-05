/*
 *  Functions specific to the text editor for this project.
 *  Created On 05 December 2021
 */
// getEditor() decides which editor to be launched on different operating systems.
export const getEditor = ({ editor }) => {
    // throw error if not interactive
    if (process.stdout.isTTY == false)
        throw new Error(`Non-interactive session, please implement a fallback.`);
    // implement operating system specific logic
    if (process.platform == 'win32') {
        // On Microsoft Windows we either use a custom provided
        // editor or fallback to the stock Notepad for compatibility
        // reasons
        editor = editor || 'notepad.exe';
    }
    else {
        // On all other POSIX compliant operating systems
        // if the consumer specifies a custom editor, we use that
        // other else we first check for the $VISUAL environment variable
        // or else fallback to $EDITOR environment variable
        editor = editor || process.env.VISUAL || process.env.EDITOR;
    }
    // throw an error if there editor is empty
    if (!editor)
        throw new Error(`Could not determine the editor. Please set $VISUAL or $EDITOR or specify a custom editor in config.`);
    return editor;
};
