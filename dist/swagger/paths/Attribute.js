"use strict";
/**
* @swagger
* /attribute/list-by-product-type:
*   get:
*     tags:
*       - Attribute
*     parameters:
*       - in: query
*         name: locale
*         schema:
*           type: string
*         required: true
*         enum: ['vi', 'en']
*       - in: query
*         name: productTypeId
*         schema:
*           type: number
*         required: true
*     responses:
*       200:
*         description: success
*         schema:
*           $ref: '#/definitions/ResponseSuccessObject'
*/ 
