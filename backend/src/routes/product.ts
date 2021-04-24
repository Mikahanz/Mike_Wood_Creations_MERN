import express, {Router} from 'express'
import {getProducts} from '../controllers/product'

const router: Router = express.Router()

router.route('/').get(getProducts)

export default router