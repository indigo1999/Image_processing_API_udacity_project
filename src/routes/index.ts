import express from 'express';

import students from "./api/students.ts"
import teachers from "./api/teachers.ts"

const routes = express.Router();


routes.get('/',(request,response) => {
    response.send("Main Api Route");
});

routes.use('/teachers',teachers)
routes.use('/students',students)

export default routes;






