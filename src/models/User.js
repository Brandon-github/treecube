import { Schema, model } from 'mongoose'

const userSchema = new Schema(
  {
    email: {
      required: true,
      type: String
    },
    password: {
      required: true,
      type: String
    },
    username: {
      required: true,
      type: String
    },
    photo: {
      required: true,
      type: String
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const User = model("User", userSchema)

export default User
