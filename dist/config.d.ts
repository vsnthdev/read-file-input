export interface ConfigImpl {
    name?: string;
    editor?: string;
    cleanup?: boolean;
    content?: {
        data?: string;
        file?: string;
    };
}
