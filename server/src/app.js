import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv';
import routes from './routes/index.js';
dotenv.config();

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(
    process.env.COOKIE_SECRET,
    {
        httpOnly: true,
        sameSite: 'strict',
        secure: true
    }
));
app.use(cors(
    {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }
));

app.get('/', (req, res) => {
    res.send('Hello This is ARC Backend Created by @lokesh-7977');
})


app.use('/api', routes);

app.all('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
        error: 404
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Server listening on http://localhost:${process.env.PORT}`);
})

export default app;