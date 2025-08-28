import { Response } from "express";
import { promises as fs_promises } from "fs";
import path from "path";
import sharp from "sharp";

const resize_image = async (
  filename: string,
  width: number,
  height: number,
  response: Response,
): Promise<void> => {
  const image_folder_path = "images";
  const image_path_old = path.join(image_folder_path, filename + ".jpg");
  const image_path_new = path.join(image_folder_path, filename + ".png");

  try {
    await fs_promises
      .access(image_path_old, fs_promises.constants.F_OK)
      .then(() => {
        sharp(image_path_old)
          .resize({ width: width, height: height })
          .toFile(image_path_new)
          .then(() => {
            return response
              .status(200)
              .sendFile(filename + ".png", { root: image_folder_path });
          });
      });
  } catch (error) {
    response.status(404).send("Filename not found");
    console.error(error);
  }
};

export default resize_image;
