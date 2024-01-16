import mongoose from 'mongoose'
import { MONGODB_URI } from '../config/index'

export const connectDB = async () => {
  await mongoose.connect(MONGODB_URI)
    .then(() => console.log(`Database connected successfully`))
    .catch((error) => console.log(`There was a error conneting to database\n${error}`))
}


