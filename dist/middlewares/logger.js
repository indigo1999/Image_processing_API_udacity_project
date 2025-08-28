"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//make it in the other module later
// interface RequestHandler {
//   (req: Request, res: Response, next: NextFunction): void;
// }
const logger_middleware = async (req, res, next) => {
    const URL = req.url;
    console.log(`${URL} has been visited`);
    // res.json();
    next();
};
// const logger = (
//   req: express.Request,
//   res: express.Response,
//   next: Function,
// ): void => {
//   const URL = req.url;
//   console.log(`${URL} has been visited.`);
//   next();
// };
exports.default = logger_middleware;
