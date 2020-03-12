/**
* @swagger
* /cart/get-cart:
*   get:
*     tags:
*       - Cart
*     security: 
*       Bearer: []
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