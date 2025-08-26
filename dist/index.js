"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
const port = 3000; //process.env.DEV_PORT_EXERCISE
///Listen On Port
app.listen(port, () => {
    console.log(`Server started at 127.0.0.1:${port}`);
});
//
app.use('/api', index_1.default);
///GET
// app.get('/api', (request , response) => {
//     response.send("Hello , World!");
// })
const myFunc = (num) => {
    return num * num;
};
const hello = (name) => {
    console.log(`Glad to hear your news ${name} .`);
    console.log(port);
};
hello("Game");
exports.default = { myFunc, app };
