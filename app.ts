
import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import  swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { userRouter } from './routers/user';

const app = express();

const swaggerDefinition = {
    info: {
        title: 'MySQL Registration Swagger API',
        version: '1.0.0',
        description: 'Endpoints to test the user registration routes',
    },
    host: 'localhost:3000',
    basePath: '/v1',
    securityDefinitions: {
        Bearer: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'headers',
        },
    },
};

const options = {
    swaggerDefinition,
    apis: ['**/*.ts'],
};
const swaggerSpec = swaggerJSDoc(options);
console.log('swaggerSpec', swaggerSpec)

app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec);
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(cookieParser());
app.use(cors());
app.use(json())
// app.use('/api/v1')
app.use('/user', userRouter);


export { app };