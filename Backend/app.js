import express, { urlencoded, json } from 'express';
import { connect } from 'mongoose';
import errorHandler from './middleware/errorHandler';
const dotenv = require('dotenv').config();
import connectDb from './config/dbConnection';
import jwt from "jsonwebtoken";
import cookieParser from 'cookie-parser';
import sendMail from './controllers/sendMail';
import cors from 'cors';

connectDb();
const app = express();
app.use(cors());
const PORT = process.env.PORT  || 5000;
app.use(urlencoded({ extended: false }));
app.use(json());
app.use("/api/users", require('./routes/userRoutes'));
app.use("/api/workers", require('./routes/workerRoutes'));
app.use("/api/verification", require('./routes/verificationRoutes'));
app.use("/api", require('./routes'));
app.use("/api/admin",require('./routes/admin'))
// sendMail("abhimynew@gmail.com", 12345);
app.use(errorHandler);
app.use(cookieParser());

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});




