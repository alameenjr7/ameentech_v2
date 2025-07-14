export declare const sharpConfig: {
    uploadDir: string;
    resize: {
        width: number;
        height: number;
        format: "jpeg" | "png" | "webp" | "avif";
        quality: number;
    };
    getOutputPath: (filename: string) => string;
};
