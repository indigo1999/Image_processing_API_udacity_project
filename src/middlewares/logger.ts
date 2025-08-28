import { Request, Response, NextFunction } from "express";

//make it in the other module later
// interface RequestHandler {
//   (req: Request, res: Response, next: NextFunction): void;
// }

const logger_middleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
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

export default logger_middleware;
