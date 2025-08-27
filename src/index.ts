
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
    const emancipation_text = " restart every game LOL and exit from every game and clear all historical data in every dark web / deep web game"
    console.log(`Glad to hear your new ${name}.` + emancipation_text)
    console.log(port)
    console.log("EXIT WITH FREEDOM TO...CANADA AND ETC. SUCCESS!")
}

hello("Game")

export default { myFunc , app };





