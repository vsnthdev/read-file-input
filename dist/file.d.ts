import { ConfigImpl } from './config';
export declare const create: ({ name, content }: ConfigImpl) => Promise<void>;
export declare const read: () => Promise<string>;
