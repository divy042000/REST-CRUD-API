import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

// middle wares
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    
})
app.listen(process.env.PORT,()=>{
    console.log("listening on the port " + process.env.PORT);
})