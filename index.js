import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import authRoute from './routes/auth.js'
import hotelRoute from './routes/hotels.js'
import cookieParser from 'cookie-parser';
import userRoute from'./routes/users.js'
import roomRoute from './routes/rooms.js'
const app = express();

app.use(cookieParser());
app.use(express.json());
dotenv.config();

const connect = async () => {
    try{
        mongoose.connect(process.env.MONGO_URL)
        .then(()=>{
            console.log("Connectted to database")
        })
    }catch(error){
        throw error;
    }
};



app.use('/api/auth',authRoute);
app.use('/api/hotels',hotelRoute);
app.use('/api/user',userRoute)
app.use('/api/rooms',roomRoute)
// middleware
app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message:  errorMessage,
        stack: err.stack
    })
});

app.listen(process.env.PORT,()=>{
    connect();
    console.log(`Server is running at ${process.env.PORT}`);
});