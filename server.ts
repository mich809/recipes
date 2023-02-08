import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});


// import express , { Express , Request , Response}from 'express'
// import {connectDB} from './Config/dbConn'
// import mongoose from 'mongoose'
// import dotenv from 'dotenv';
// dotenv.config();

// const PORT = process.env.PORT || 3500
// const app: Express = express()

// console.log(PORT)



// connectDB()

// mongoose.connection.once('open', () => {
//     console.log('Connected to MongoDB')
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
// })

// mongoose.connection.on('error', err => {
//     console.log(err)
// })