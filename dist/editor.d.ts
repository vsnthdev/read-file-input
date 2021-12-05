import { ConfigImpl } from './config.js';
export declare const getEditor: ({ editor }: ConfigImpl) => string;
export declare const openEditor: (config: ConfigImpl) => Promise<import("execa").ExecaReturnValue<string>>;
