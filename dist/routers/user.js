"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
exports.userRouter = express_1.Router();
exports.userRouter.get('/list', (req, res) => {
    let locale = req.query.locale;
    res.send({ success: true, result: locale });
});
exports.userRouter.get('/info', (req, res) => {
    let token = req.headers['authorization'];
    if (token) {
        let a = { name: 'huu', id: 1 };
        res.send({ success: true, result: a });
    }
    else {
        res.status(400).send({ success: false, message: 'Token invalid' });
    }
});
