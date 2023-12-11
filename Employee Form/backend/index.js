import dotenv from 'dotenv';
import express from "express"
import cors from "cors";
import { errorHandler } from './utils/errorHandler.js';
import { createUser,updateUser,getAllUsers,getSingleUser,run} from './database.js';
const app = express();
dotenv.config();
const port = 8080;

run();
app.use(express.json());

app.use(cors({  origin: ['http://127.0.0.1:5500', 'http://localhost:5500'],
  credentials:true
}));

app.route('/api/user').get(getAllUsers).post(createUser);

app.route('/api/user/:id').get(getSingleUser);



app.use(errorHandler)




app.listen(port, () => {
    console.log("app is Listening in port " + port);
})