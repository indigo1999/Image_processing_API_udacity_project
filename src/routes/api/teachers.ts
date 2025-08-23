import express from 'express';


const teachers = express.Router();


teachers.get('/',(request,response) => {
    response.send("Teachers route");
});

export default teachers;



