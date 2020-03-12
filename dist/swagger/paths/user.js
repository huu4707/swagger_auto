"use strict";
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
*         description: get list user success,
*         schema:
*           $ref: '#/definitions/ResponseSuccessObject'
*       '400':
*         description: Password reset link is invalid or has expired
*/ 
