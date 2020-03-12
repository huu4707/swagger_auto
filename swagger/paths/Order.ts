/**
* @swagger
* /order/cart:
*   post:
*     tags:
*       - Order
*     produces:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*           $ref: '#/definitions/CartInput'
*     responses:
*       200:
*         description: Login success
*         schema:
*           $ref: '#/definitions/ResponseSuccessObject'
*/


/**
* @swagger
* /order/show-cart:
*   post:
*     tags:
*       - Order
*     produces:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*           $ref: '#/definitions/CartShowInput'
*     responses:
*       200:
*         description: success
*         schema:
*           $ref: '#/definitions/ResponseSuccessObject'
*/


/**
* @swagger
* /order/search:
*   get:
*     tags:
*       - Order
*     parameters:
*       - in: query
*         name: locale
*         schema:
*           type: string
*         required: true
*         enum: ['vi', 'en']
*       - in: query
*         name: orderCode
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
* /order/order-status:
*   get:
*     tags:
*       - Order
*     security: 
*       Bearer: []
*     parameters:
*       - in: query
*         name: locale
*         schema:
*           type: string
*         required: true
*         enum: ['vi', 'en']
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