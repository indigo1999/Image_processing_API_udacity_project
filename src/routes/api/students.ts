import express from "express";

const students = express.Router();

students.get("/", (request, response) => {
  response.send("Student route");
});

export default students;
