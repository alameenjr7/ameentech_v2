"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sharpConfig = void 0;
const path_1 = require("path");
const projectRoot = (0, path_1.join)(__dirname, '..', '..', '..');
const uploadsDir = (0, path_1.join)(projectRoot, 'uploads');
exports.sharpConfig = {
    uploadDir: uploadsDir,
    resize: {
        width: 300,
        height: 300,
        format: 'jpeg',
        quality: 80,
    },
    getOutputPath: (filename) => (0, path_1.join)(uploadsDir, filename),
};
//# sourceMappingURL=sharp.config.js.map