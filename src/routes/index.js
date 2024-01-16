import { Router } from "express";
import { readdirSync } from 'fs'
import path from "path";

const router = Router()
const ROOT_PATH = `${__dirname}`

const cleanFilename = ({ filename }) => {
  if (typeof filename !== "string") throw new Error(`The filename must be String type, ${filename}`)

  return filename.split('.').shift();
}

readdirSync(ROOT_PATH).filter((filename) => {
  const cleanedFilename = cleanFilename({ filename })

  if (cleanedFilename !== "index") {
    import(`${path.join(ROOT_PATH, cleanedFilename)}`)
      .then((module) => {
        router.use(`/api/${cleanedFilename}`, module.router)
      })
      .catch((error) => {
        console(`there was a error importing the module in the route /api/${cleanFilename}\n${error}`)
      })
  }
})

export default router


