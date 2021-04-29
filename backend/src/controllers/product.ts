import express, {Request, Response, NextFunction} from 'express'
import Product from '../models/product'

const getProducts = async (req: Request, res: Response, next: NextFunction) => {

    const products = await Product.find({})

    if(products){
        res.status(200).json(products)
    }
}

const getProductById = async(req: Request, res: Response, next: NextFunction) => {
    
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        next(error)
    }

}

export {getProducts, getProductById}