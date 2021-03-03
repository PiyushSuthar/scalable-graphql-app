import mongoose from 'mongoose'
import { mongo } from '../config/environment'

let isConnected
let db

const connectDB = async () => {
    if (isConnected) return db

    try {
        db = await mongoose.connect(mongo.url, {
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useNewUrlParser: true
        })

        isConnected = db.connections[0].readyState
        return db
    } catch (error) {
        throw new Error(error)
    }
}
export default connectDB