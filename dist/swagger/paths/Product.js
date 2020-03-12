"use strict";
/**
* @swagger
* /product/list-by-product-type:
*   get:
*     tags:
*       - Product
*     parameters:
*       - in: query
*         name: locale
*         schema:
*           type: string
*         required: true
*         enum: ['vi', 'en']
*       - in: query
*         name: slug
*         schema:
*           type: string
*         required: true
*       - in: query
*         name: limit
*         schema:
*           type: number
*       - in: query
*         name: offset
*         schema:
*           type: number
*     responses:
*       200:
*         description: success
*         schema:
*           $ref: '#/definitions/ResponseSuccessObject'
*/
/**
* @swagger
* /product/compare:
*   get:
*     tags:
*       - Product
*     parameters:
*       - in: query
*         name: locale
*         schema:
*           type: string
*         required: true
*         enum: ['vi', 'en']
*       - in: query
*         name: productA
*         schema:
*           type: number
*         required: true
*       - in: query
*         name: productB
*         schema:
*           type: number
*         required: true
*     responses:
*       200:
*         description: success
*         schema:
*           $ref: '#/definitions/ResponseSuccessObject'
*/
/**
* @swagger
* /product/search:
*   get:
*     tags:
*       - Product
*     parameters:
*       - in: query
*         name: locale
*         schema:
*           type: string
*         required: true
*         enum: ['vi', 'en']
*       - in: query
*         name: keyword
*         schema:
*           type: string
*         required: true
*     responses:
*       200:
*         description: success
*         schema:
*           $ref: '#/definitions/ResponseSuccessObject'
*/
/**
* @swagger
* /product/info:
*   get:
*     tags:
*       - Product
*     parameters:
*       - in: query
*         name: locale
*         schema:
*           type: string
*         required: true
*         enum: ['vi', 'en']
*       - in: query
*         name: slug
*         schema:
*           type: string
*         required: true
*     responses:
*       200:
*         description: success
*         schema:
*           $ref: '#/definitions/ResponseSuccessObject'
*/
/**
* @swagger
* /product/product-hot:
*   get:
*     tags:
*       - Product
*     parameters:
*       - in: query
*         name: locale
*         schema:
*           type: string
*         required: true
*         enum: ['vi', 'en']
*       - in: query
*         name: productType
*         schema:
*           type: number
*         required: true
*       - in: query
*         name: limit
*         schema:
*           type: number
*     responses:
*       200:
*         description: success
*         schema:
*           $ref: '#/definitions/ResponseSuccessObject'
*/
/**
* @swagger
* /product/product-promotion:
*   get:
*     tags:
*       - Product
*     parameters:
*       - in: query
*         name: locale
*         schema:
*           type: string
*         required: true
*         enum: ['vi', 'en']
*     responses:
*       200:
*         description: success
*         schema:
*           $ref: '#/definitions/ResponseSuccessObject'
*/
/**
* @swagger
* /product/product-seen:
*   post:
*     tags:
*       - Product
*     produces:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*           $ref: '#/definitions/SeenInput'
*     responses:
*       200:
*         description: Login success
*         schema:
*           $ref: '#/definitions/ResponseSuccessObject'
*/ 
