import { Router } from 'express';

export const userRouter = Router();


userRouter.get('/list', (req, res: any) => {
    let locale = req.query.locale;
    res.send({ success: true, result: locale })
});


userRouter.get('/info', (req, res: any) => {
    let token = req.headers['authorization'] as string;
    if(token) {
        let a = { name: 'huu', id: 1}
        res.send({ success: true, result: a })
    } else{
        res.status(400).send({ success: false, message: 'Token invalid' })
    }
});