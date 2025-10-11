"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cache_1 = __importDefault(require("node-cache"));
const cache = new node_cache_1.default({ stdTTL: 60 }); // cache expires in 60s
// Middleware to check cache
function image_process_cache(req, res, next) {
    const key = req.originalUrl;
    const cachedData = cache.get(key);
    if (cachedData) {
        console.log("✅ Serving from cache");
        return res.json(cachedData);
    }
    // Hook res.json to save response into cache
    const sendResponse = res.json.bind(res);
    res.json = (body) => {
        cache.set(key, body);
        return sendResponse(body);
    };
    next();
}
exports.default = image_process_cache;
// Credit : ChatGPT
