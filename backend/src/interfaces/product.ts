import mongoose, {Document} from 'mongoose'

interface IProdImage {
    id: string,
    image: string
}

export default interface IProduct extends Document{
    user_id: mongoose.Schema.Types.ObjectId,
    prodName: string,
    prodDescription: string,
    brand: string,
    category: string,
    prodImage: IProdImage[],
    stockQty: number,
    rating: number,
    reviews: mongoose.Schema.Types.ObjectId[],
    reviewsQty: number,
    price: number,
    specialPrice: number
}