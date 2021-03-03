import express from 'express'
import graphql from './graphql'

const app = express()

graphql.applyMiddleware({
    app
})

export default app