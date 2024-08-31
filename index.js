const express = require('express');
const htmlPage = require('./')
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var setupSwagger = require('./swagger');
setupSwagger(app);  // Ensure Swagger setup is after middleware

const userRouter = require('./routes/usersRoutes');
const productsRouter = require('./routes/productsRoutes');

app.use('/users', userRouter);
app.use('/products', productsRouter);

app.get('/', (req, res) => {
    res.send("<h1 style='color: blue; text-align: center;'>Hello, Swagger UI Page Link</h1> <a style='color: black; display:block ; text-align: center; text-decoration: none'; href = 'https://special-doodle-6wr49jv6w6vc56q9-3003.app.github.dev/shreyashJain/'>https://special-doodle-6wr49jv6w6vc56q9-3003.app.github.dev/shreyashJain/</a> ");
});

app.listen(3003, () => {
    console.log('Server started on http://localhost:3003');
});
