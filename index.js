import { port } from './config/environment'
import app from './app'
import connectDB from './db'

const start = async () => {
    try {

        console.log(`Connecting to Database`)
        await connectDB()
        console.log(`Connecting to Database`)

        await app.listen(port)
        console.log(`🚀  GraphQL server running at port: ${port}`)
    
    } catch (error) {
    
        console.log('Not able to run GraphQL server');
    
    }
}

start()