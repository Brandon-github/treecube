import app from '../app'
import { PORT } from '../config'

app.listen(PORT, () => {
  console.log(`
  Server running on port ${PORT}\n
  Open in browser http://127.0.0.1:${PORT}`)
})
