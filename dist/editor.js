/*
 *  Functions specific to the text editor for this project.
 *  Created On 05 December 2021
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { execa } from 'execa';
import { getTempFilePath } from './file.js';
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
export const openEditor = (config) => __awaiter(void 0, void 0, void 0, function* () {
    return yield execa(`${config.editor} "${getTempFilePath(config.name)}"`, {
        shell: true,
    });
});
