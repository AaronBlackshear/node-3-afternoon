require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const session = require('express-session');
const app = express();

const checkForSession = require('./middlewares/checkForSession');
const swag_ctrl = require('./controllers/swag_controller');
const auth_ctrl = require('./controllers/auth_controller');
const cart_ctrl = require('./controllers/cart_controller');
const search_ctrl = require('./controllers/search_controller');

app.use(json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false
}));
app.use(checkForSession);
app.use(express.static('/build'))

app.get('/api/swag', swag_ctrl.read);

app.post('/api/login', auth_ctrl.login);
app.post('/api/register', auth_ctrl.register);
app.post('/api/signout', auth_ctrl.signout);
app.get('/api/user', auth_ctrl.getUser);

app.post('/api/cart', cart_ctrl.add);
app.post('/api/cart/checkout', cart_ctrl.checkout);
app.delete('/api/cart', cart_ctrl.delete);

app.get('/api/search', search_ctrl.search);


const port = process.env.CONNECTION_STRING || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`))