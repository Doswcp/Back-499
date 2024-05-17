const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: ['https://websitedb.vercel.app', 'http://localhost:3001'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoute);

app.get('/', (req, res) => {
    res.send("6403611 วิชญ์ภาส นารถสกุล FinalProject CPE499");
});


mongoose.connect('mongodb+srv://admin:123@cluster0.wl0ggho.mongodb.net/Project0?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log("Connected to database!");
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(() => {
        console.log("Connection Filed!");
    });