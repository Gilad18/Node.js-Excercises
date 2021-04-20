const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
        unique: true,
    },
    productCategory: {
        type: String,
        required: true,
        unique: false,
    },
    productIsActive: {
        type: Boolean,
        required: false,
        unique: false,
        default: true
    },
    productDetails: {    
        description: {
            type: String,
            required: true,
            unique: false,
            max: 10
        },
        price: {
            type: Number,
            required: true,
            unique: false,
            validate(value) {
                if (value < 0) {
                    throw new Error('Price must be a positive numbwe')
                }
            }
        },
        discount: {
            type: Number,
            required: false,
            unique: false,
            default: 0
        },
        images: {
            type: Array,
            required: true,
            unique: false,
            default : []

        },
        phone: {
            type: String,
            required: true,
            unique: false,
            max: 10,
            validate(value) {
                if (value[0] !== '0' || value[1] !== '5') {
                    throw new Error('Please enter a valid mobile number')
                }
            }
        },
        dateAdd: {
            type: Date,
            required: false,
            unique: false,
            default: Date.now
        }
    }
})

const productModel  = mongoose.model('myStore',productSchema);
module.exports= productModel;