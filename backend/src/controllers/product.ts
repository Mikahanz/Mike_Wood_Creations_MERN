import express, {Request, Response, NextFunction} from 'express'

const getProducts = (req: Request, res: Response, next: NextFunction) => {
    res.json({message: 'hi'})
}

export {getProducts}