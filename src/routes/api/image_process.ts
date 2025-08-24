import { error } from 'console';
import express, { Response } from 'express';
import { promises as fs_promises } from 'fs'
import path from 'path'
import sharp from 'sharp';

const image_routes = express.Router();


image_routes.get('/',async (request,response) => {

    let filename : string = ""//request.query.filename?.toString()!

    if(request.query.filename && request.query.filename?.toString()!.length != 0) {
        filename = request.query.filename?.toString()!
    } else {
        response.status(400).send("No filename input")
    }
    let width_query : number = parseInt(request.query.width?.toString()!,10)
    let height_query : number = parseInt(request.query.height?.toString()!,10)


    try {
        if ( (isNaN(width_query) || width_query <= 0) && (isNaN(height_query) || height_query <= 0) ) {
            response.status(400).send('Invalid width and height parameter.');
        } else {
           resize_image(filename,width_query,height_query,response)
        }
    } catch (error) {
        response.status(400).send('Invalid width parameter.');
    }       
    
});

const resize_image = async(filename : string,width : number,height : number,response : Response) => {
    const image_folder_path = "images"
    const image_path_old = path.join(image_folder_path,filename+'.jpg')
    const image_path_new = path.join(image_folder_path,filename+'.png')
    
    await fs_promises.access(image_path_old, fs_promises.constants.F_OK).then(() => {
                sharp(image_path_old).resize({ width : width , height : height}).toFile(image_path_new).then(() => {
                        response
                        .status(200)
                        .sendFile(filename+".png",{root : image_folder_path})
                })
            })
}


export default image_routes;



