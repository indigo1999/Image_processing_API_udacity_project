"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000; //process.env.DEV_PORT_EXERCISE
const hello = (name) => {
    console.log(`Glad to hear your news ${name} .`);
    console.log(port);
};
hello("Game");
//# sourceMappingURL=index.js.map