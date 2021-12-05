/*
 *  Entryfile for  read-file-input project.
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
import merge from 'deepmerge';
const defaults = {
    cleanup: true,
};
export default (config = defaults) => __awaiter(void 0, void 0, void 0, function* () {
    // merge the user provided overrides with the defaults
    config = merge(defaults, config);
    // 1. figure out which editor to use
    // 2. if a filename was not provided, generate a random one
    // 3. generate the temprory file
    // 4. open the editor
    // 5. capture input
    // 6. delete the file
    console.log(config);
    return '';
});
