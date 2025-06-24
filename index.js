const express = require('express');

const htmlPage = require('./')

var setupSwagger = require('./swagger');

var app = express();

const userRouter = require('./routes/usersRoutes');

const productsRouter = require('./routes/productsRoutes');

const cors = require('cors');

app.use(cors());    

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3001;

setupSwagger(app);  // Ensure Swagger setup is after middleware

app.use('/users', userRouter);

app.use('/products', productsRouter);

app.use(cors({
    origin: ['https://nodeexapi.onrender.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.get('/', (req, res) => {
    res.send(`
        <h1 style="color: black; text-align: center;">Hello, Swagger UI Page Link</h1>
        <a style="color: blue; display: block; text-align: center;" href="https://nodeexapi.onrender.com/swagger">Swagger Link</a>
    `);
});



// app.get('/', (req, res) => {
//     res.send(`
//         <h1 style="color: black; text-align: center;">Hello, Swagger UI Page Link</h1>
//         <a style="color: blue; display: block; text-align: center;" href="https://nodeexapi.onrender.com/swagger">Swagger Link</a>
//     `);
// });

app.use(cors());


app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}/swagger`);
});
