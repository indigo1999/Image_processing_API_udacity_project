import express from 'express';


const routes = express.Router();


routes.get('/',(request,response) => {
    response.send("Main Api Route");
});

export default routes;






