import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import router from './routes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))
app.use(cors())

app.use(router)

export default app
