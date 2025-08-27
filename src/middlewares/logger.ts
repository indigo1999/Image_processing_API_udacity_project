import express from "express";

const logger = (req : express.Request , res : express.Response , next : Function) : void => {
    let URL = req.url
    console.log(`${URL} has been visited.`)
    next();
}

export default logger;