import express from 'express';
import { promises as fs_promises } from 'fs'
import path from 'path'

const app = express();
const image_routes = express.Router();


image_routes.get('/',(request,response) => {

    const filename : string = request.query.filename?.toString()!
    const width : number = parseInt(request.query.width?.toString()!)
    const height : number = parseInt(request.query.height?.toString()!)

    // response.writeHead(200, {"content-type" : "image/jpg"})
    // const readed_file = read_image_file(filename)?.toString()!
    // const decoded_64 = decode_base64(readed_file)
    
    // response.end(decoded_64)
    const image_folder_path = "images"
    const image_path = path.join(filename+'.jpg')
    response.sendFile(image_path,{root : image_folder_path},(error?) => {
        console.log("Error : "+error)
    })

    //response.send("Image route");
});

// const read_image_file = async (filename : string) : Promise<string> => {
//     const image_folder_path = "images"
//     const image_path = path.join(image_folder_path,'/',filename+'.jpg')
    
//     try {
//         const data = await fs_promises.readFile(image_path,'base64') as string
//         return data
//     } catch (error) {
//         console.log(error)
//         return error as string
//     }
// }

// const decode_base64 = (base64_string : string) => {
//     const buffer = Buffer.from(base64_string, 'base64');
//   // Convert the Buffer back to a string, specifying 'utf-8' encoding for text
//     const decoded = buffer.toString('utf-8');
//     return decoded;
// }


export default image_routes;



