"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { promises as fs_promises } from "fs";
// import path from "path";
// import sharp from "sharp";
const image_process_js_1 = __importDefault(require("../../middlewares/image_process.js"));
const index_js_1 = __importDefault(require("../../services/image_process/index.js"));
// import { resolve } from "path";
const image_routes = express_1.default.Router();
image_routes.get("/image_query", image_process_js_1.default, async (request, response) => {
    console.log("Fetching for new data.....");
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
        await new Promise((resolve) => setTimeout(resolve, 2000));
        (0, index_js_1.default)(filename, width_query, height_query, response);
    }
});
exports.default = image_routes;
