"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
exports.userRouter = express_1.Router();
/**
* @swagger
* /user/list:
*   get:
*     tags:
*       - Users
*     name: get list user
*     parameters:
*       - name: locale
*         in: query
*         schema:
*           type: string
*         required:
*           - locale
*     responses:
*       '200':
*         description: get list user success
*       '400':
*         description: Password reset link is invalid or has expired
*/
exports.userRouter.get('/list', (req, res) => {
    let locale = req.query.locale;
    res.send({ success: true, result: locale });
});
/**
* @swagger
* /user/info:
*   get:
*     tags:
*       - Users
*     name: Find user
*     security:
*       - Bearer: []
*     responses:
*       200:
*         description: A single user object
*       400:
*         description: No auth token
*/
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
