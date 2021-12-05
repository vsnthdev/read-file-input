export interface ConfigImpl {
    name?: string;
    editor?: string;
    cleanup?: boolean;
    content?: {
        file?: string;
        data?: string;
    };
}
