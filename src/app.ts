import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('URL Shortener API is up and running!')
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
