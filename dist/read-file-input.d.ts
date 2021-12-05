interface ConfigImpl {
    editor?: string;
    name?: string;
    content?: {
        file?: string;
        data?: string;
    };
}
declare const _default: (config: ConfigImpl) => Promise<string>;
export default _default;
