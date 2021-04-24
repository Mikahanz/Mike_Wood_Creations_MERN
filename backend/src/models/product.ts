import mongoose, {Schema} from 'mongoose'
import IProduct from '../interfaces/product'


const productSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: 'UserId is required!',
        ref: 'User'
    },
    prodName: {
        type: String,
        required: 'Product name is required!',
        unique: true,
        trim: true
    },
    prodDescription: {
        type: String,
        required: 'Product description is required!'
    },
    brand: {
        type: String,
        required: 'Brand is required!',
        trim: true
    },
    category:{
        type: String,
        enum: ['men','women','kid','any'],
        required: 'Category is required!'
    },
    prodType: {
        type: String,
        enum: ['watch','bowtie', 'sunglasses', 'bag', 'wallet', 'ringbox', 'bracelet', 'cufflinks', 'coaster', 'band', 'other'],
        required: 'Product Type is required! Please provide one of the following: watch, bowtie, sunglasses, bag, wallet, ringbox, bracelet, cufflinks, band, or other'
    },
    prodImage: {
        type: [{id: String, image: String}],    // id should be Time Stamp & image should be relative path
        required: 'Image is required!'        
    },
    stockQty: {
        type: Number,
        required: 'Quantity in stock is required!'
    },
    rating: {
        type: Number
    },
    reviews: {
        type: [mongoose.Schema.Types.ObjectId]
    },
    reviewsQty: {
        type: Number
    },
    price:{
        type: Number,
        required: 'Price is required!'
    },
    specialPrice:{
        type: Number || null,
        default: null
    }
},
{
    timestamps: true
})

const Product = mongoose.model<IProduct>('Product', productSchema)

export default Product