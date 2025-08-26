"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const image_routes = express_1.default.Router();
image_routes.get('/', async (request, response) => {
    let filename = ""; //request.query.filename?.toString()!
    let width_query = parseInt(request.query.width?.toString(), 10);
    let height_query = parseInt(request.query.height?.toString(), 10);
    if (request.query.filename && request.query.filename?.toString().length != 0) {
        filename = request.query.filename?.toString();
    }
    else {
        return response.status(400).send("No filename input");
    }
    if ((isNaN(width_query) || width_query <= 0) || (isNaN(height_query) || height_query <= 0)) {
        return response.status(400).send('Invalid width and height parameter.');
    }
    else {
        resize_image(filename, width_query, height_query, response);
    }
});
const resize_image = async (filename, width, height, response) => {
    const image_folder_path = "images";
    const image_path_old = path_1.default.join(image_folder_path, filename + '.jpg');
    const image_path_new = path_1.default.join(image_folder_path, filename + '.png');
    try {
        await fs_1.promises.access(image_path_old, fs_1.promises.constants.F_OK).then(() => {
            (0, sharp_1.default)(image_path_old).resize({ width: width, height: height }).toFile(image_path_new).then(() => {
                return response
                    .status(200)
                    .sendFile(filename + ".png", { root: image_folder_path });
            });
        });
    }
    catch (error) {
        response.status(404).send("Filename not found");
        // console.log(error)
    }
};
exports.default = image_routes;
