// server.js 

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
dotenv.config();
const cors=require('cors');
connectDB();

const app = express();
app.get('/',(req,res)=>{
    res.send('RAand')
})
app.use(cors());
app.use(express.json());
app.use('/api/users',authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
