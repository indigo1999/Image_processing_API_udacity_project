"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { promises as fs_promises } from "fs";
// import path from "path";
// import sharp from "sharp";
const logger_js_1 = __importDefault(require("../../middlewares/logger.js"));
const index_js_1 = __importDefault(require("../../services/image_process/index.js"));
const image_routes = express_1.default.Router();
image_routes.get("/image_query", logger_js_1.default, async (request, response) => {
    const filename = request.query.filename; //request.query.filename?.toString()!
    const width_input = request.query.width;
    const height_input = request.query.height;
    if (!width_input || !height_input) {
        return response.status(400).send("Neither width nor height is found");
    }
    const width_query = parseInt(width_input.toString(), 10);
    const height_query = parseInt(height_input.toString(), 10);
    if (!filename || filename.length == 0) {
        return response.status(400).send("No filename input");
    }
    if (isNaN(width_query) ||
        width_query <= 0 ||
        isNaN(height_query) ||
        height_query <= 0) {
        return response.status(400).send("Invalid width and height parameter.");
    }
    else {
        (0, index_js_1.default)(filename, width_query, height_query, response);
    }
});
// const resize_image = async (
//   filename: string,
//   width: number,
//   height: number,
//   response: Response,
// ): Promise<void> => {
//   const image_folder_path = "images";
//   const image_path_old = path.join(image_folder_path, filename + ".jpg");
//   const image_path_new = path.join(image_folder_path, filename + ".png");
//   try {
//     await fs_promises
//       .access(image_path_old, fs_promises.constants.F_OK)
//       .then(() => {
//         sharp(image_path_old)
//           .resize({ width: width, height: height })
//           .toFile(image_path_new)
//           .then(() => {
//             return response
//               .status(200)
//               .sendFile(filename + ".png", { root: image_folder_path });
//           });
//       });
//   } catch (error) {
//     response.status(404).send("Filename not found");
//     console.error(error);
//   }
// };
exports.default = image_routes;
