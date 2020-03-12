"use strict";
/**
* @swagger
* /customer/profile:
*   get:
*     tags:
*       - Customer
*     security:
*       Bearer: []
*     responses:
*       200:
*         description: Login success
*         schema:
*           $ref: '#/definitions/ResponseSuccessObject'
*/
/**
* @swagger
* /customer/change-info:
*   put:
*     tags:
*       - Customer
*     security:
*       Bearer: []
*     produces:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*           $ref: '#/definitions/Customer'
*     responses:
*       200:
*         description: Login success
*         schema:
*           $ref: '#/definitions/ResponseSuccessObject'
*/
/**
* @swagger
* /customer/change-password:
*   put:
*     tags:
*       - Customer
*     security:
*       Bearer: []
*     produces:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*           $ref: '#/definitions/ChangePasswordCustomer'
*     responses:
*       200:
*         description: Login success
*         schema:
*           $ref: '#/definitions/ResponseSuccessObject'
*/ 
