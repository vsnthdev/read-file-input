import { ConfigImpl } from './config';
export declare const getTempFilePath: (name: string) => string;
export declare const create: ({ name, content }: ConfigImpl) => Promise<void>;
export declare const read: () => Promise<string>;
