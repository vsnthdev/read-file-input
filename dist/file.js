/*
 *  Handles file operations specific to this project.
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
import fs from 'fs/promises';
import osPaths from 'os-paths';
import path from 'path';
export const getTempFilePath = (name) => path.join(osPaths.temp(), name);
// creates a new file in the temp directory according
// to the configuration specified
export const create = ({ name, content }) => __awaiter(void 0, void 0, void 0, function* () {
    // create a temporary file
    const tempFilePath = getTempFilePath(name);
    const file = yield fs.open(tempFilePath, 'w');
    // if there's a content block specified, we process accordingly
    if (content) {
        if (content.data) {
            // programmatically specifying the file content data
            // is always preferred over providing another file as template
            // as that is a bit faster
            yield file.writeFile(content.data, 'utf-8');
        }
        else if (content.file) {
            // but in case the template file is static and lengthy
            // the library should also be able to read from that template
            // and generate a temporary file
            yield file.writeFile(yield fs.readFile(content.file, 'utf-8'), 'utf-8');
        }
    }
    // just so we don't conflict later, we immediately close the file
    // we have created
    yield file.close();
});
// reads the temp file text and returns back the utf-8 string
export const read = (config) => __awaiter(void 0, void 0, void 0, function* () { return yield fs.readFile(getTempFilePath(config.name), 'utf-8'); });
// deletes the created file from the temp directory, if enabled in the config
export const cleanup = () => __awaiter(void 0, void 0, void 0, function* () { });
