"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const user_1 = require("./routers/user");
const app = express_1.default();
exports.app = app;
const swaggerDefinition = {
    info: {
        title: 'MySQL Registration Swagger API',
        version: '1.0.0',
        description: 'Endpoints to test the user registration routes',
    },
    host: 'localhost:3000',
    basePath: '/',
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
const swaggerSpec = swagger_jsdoc_1.default(options);
console.log('swaggerSpec', swaggerSpec);
app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
app.use(cookie_parser_1.default());
app.use(cors_1.default());
app.use(body_parser_1.json());
app.use('/user', user_1.userRouter);
