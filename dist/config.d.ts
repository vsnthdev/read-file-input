export interface ConfigImpl {
    editor?: string;
    name?: string;
    cleanup?: boolean;
    content?: {
        file?: string;
        data?: string;
    };
}
