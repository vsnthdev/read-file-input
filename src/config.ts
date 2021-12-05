/*
 *  Contains code related to configuration of this library.
 *  Created On 05 December 2021
 */

export interface ConfigImpl {
    editor?: string
    name?: string
    cleanup?: boolean
    content?: {
        file?: string
        data?: string
    }
}
