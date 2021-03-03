import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model('Book', BookSchema)