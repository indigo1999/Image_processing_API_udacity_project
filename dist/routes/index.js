"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const students_js_1 = __importDefault(require("./api/students.js"));
const teachers_js_1 = __importDefault(require("./api/teachers.js"));
const image_process_js_1 = __importDefault(require("./api/image_process.js"));
const routes = express_1.default.Router();
routes.get('/', (request, response) => {
    response.send("Main Api Route");
});
routes.use('/teachers', teachers_js_1.default);
routes.use('/students', students_js_1.default);
routes.use('/image_process', image_process_js_1.default);
exports.default = routes;
