
import express from 'express';

import routes from "./routes/index"



const app = express();
const port = 3000//process.env.DEV_PORT_EXERCISE


///Listen On Port
app.listen(port, () => {
    console.log(`Server started at 127.0.0.1:${port}`)
})

//
app.use('/api',routes)

///GET
// app.get('/api', (request , response) => {
//     response.send("Hello , World!");
// })

const myFunc = (num : number) : number => {
    return num * num
}

const hello = (name : string) : void => {
    console.log(`Glad to hear your news ${name} .`)
    console.log(port)
}

hello("Game")

export default myFunc;





