import { Request, Response, NextFunction } from "express";
import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 60 }); // cache expires in 60s

// Middleware to check cache
function image_process_cache(req: Request, res: Response, next: NextFunction) {
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

export default image_process_cache;
