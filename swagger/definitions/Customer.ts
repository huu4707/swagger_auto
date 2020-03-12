/**
* @swagger
* definitions:
*   Customer:
*       required: 
*           - email
*           - sex
*           - phone
*           - name
*           - dob
*       properties:
*           email:
*               type: string   
*               uniqueItems: true
*           name:
*               type: string   
*           phone:
*               type: string  
*           dob:
*               type: string 
*           sex:
*               type: string
*
*/