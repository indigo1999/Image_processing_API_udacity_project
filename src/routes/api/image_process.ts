import express from "express";
// import { promises as fs_promises } from "fs";
// import path from "path";
// import sharp from "sharp";
import image_process_cache from "../../middlewares/image_process.js";
import resize_image from "../../services/image_process/index.js";
// import { resolve } from "path";

const image_routes = express.Router();

image_routes.get(
  "/image_query",
  image_process_cache,
  async (request, response) => {
    console.log("Fetching for new data.....");

    const filename: string = request.query.filename as string; //request.query.filename?.toString()!
    const width_input: string = request.query.width as string;
    const height_input: string = request.query.height as string;

    if (!width_input || !height_input) {
      return response.status(400).send("Neither width nor height is found");
    }
    const width_query: number = parseInt(width_input.toString()!, 10);
    const height_query: number = parseInt(height_input.toString()!, 10);

    if (!filename || filename.length == 0) {
      return response.status(400).send("No filename input");
    }

    if (
      isNaN(width_query) ||
      width_query <= 0 ||
      isNaN(height_query) ||
      height_query <= 0
    ) {
      return response.status(400).send("Invalid width and height parameter.");
    } else {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      resize_image(filename, width_query, height_query, response);
    }
  },
);

export default image_routes;
