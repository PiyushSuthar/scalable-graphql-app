import mongoose from "mongoose";

const WorksAtSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author",
        required: true
    },
    publisher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Publisher",
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model('WorksAt', WorksAtSchema)