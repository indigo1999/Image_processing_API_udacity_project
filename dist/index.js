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
    const emancipation_text = " restart every game LOL and exit from every game and clear all historical data in every dark web / deep web game";
    console.log(`Glad to hear your new ${name}.` + emancipation_text);
    console.log(port);
    console.log("EXIT WITH FREEDOM TO...CANADA AND ETC. SUCCESS!");
};
hello("Game");
exports.default = { myFunc, app };
