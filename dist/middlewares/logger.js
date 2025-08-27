"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = (req, res, next) => {
    let URL = req.url;
    console.log(`${URL} has been visited.`);
    next();
};
exports.default = logger;
