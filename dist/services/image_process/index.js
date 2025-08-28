"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const resize_image = async (filename, width, height, response) => {
    const image_folder_path = "images";
    const image_path_old = path_1.default.join(image_folder_path, filename + ".jpg");
    const image_path_new = path_1.default.join(image_folder_path, filename + ".png");
    try {
        await fs_1.promises
            .access(image_path_old, fs_1.promises.constants.F_OK)
            .then(() => {
            (0, sharp_1.default)(image_path_old)
                .resize({ width: width, height: height })
                .toFile(image_path_new)
                .then(() => {
                return response
                    .status(200)
                    .sendFile(filename + ".png", { root: image_folder_path });
            });
        });
    }
    catch (error) {
        response.status(404).send("Filename not found");
        console.error(error);
    }
};
exports.default = resize_image;
