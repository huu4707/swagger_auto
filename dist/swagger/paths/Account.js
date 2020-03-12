"use strict";
/**
* @swagger
* /account/register:
*   post:
*     tags:
*       - Account
*     name: register
*     produces:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*           $ref: '#/definitions/Account'
*     responses:
*       200:
*         description: new account
*         schema:
*           $ref: '#/definitions/ResponseSuccessObject'
*/
/**
* @swagger
* /account/login:
*   post:
*     tags:
*       - Account
*     name: Login
*     produces:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*           $ref: '#/definitions/Login'
*     responses:
*       200:
*         description: Login success
*         schema:
*           $ref: '#/definitions/ResponseSuccessObject'
*/ 
