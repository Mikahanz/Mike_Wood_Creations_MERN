import mongoose, {Document} from 'mongoose'

interface IProdImage {
    id: string,
    image: string
}

export default interface IProduct extends Document{
    userId: mongoose.Types.ObjectId,
    prodName: string,
    prodDescription: string,
    brand: string,
    category: string,
    prodType: string,
    prodImage: IProdImage[],
    stockQty: number,
    rating: number,
    reviews: mongoose.Types.ObjectId[],
    reviewsQty: number,
    price: number,
    specialPrice?: number 
}