import express from 'express';

import students from "./api/students.ts"
import teachers from "./api/teachers.ts"
import image_process from "./api/image_process.ts"

const routes = express.Router();


routes.get('/',(request,response) => {
    response.send("Main Api Route");
});

routes.use('/teachers',teachers)
routes.use('/students',students)
routes.use('/image_process',image_process)

export default routes;






