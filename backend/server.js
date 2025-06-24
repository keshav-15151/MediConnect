import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';

//app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();  //Connect to MongoDB
connectCloudinary();  //Connect to Cloudinary

//middlewares
app.use(cors());    //To connect frontend and backend
app.use(express.json());  //Request are passed as json

//api endpoints
app.use('/api/admin', adminRouter)
//localhost:4000/api/admin/add-doctor

app.get('/', (req, res) => {
  res.send('API Working Great');
});

app.listen(port, ()=> console.log("Server Started " , port))