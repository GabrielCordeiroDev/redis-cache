import 'dotenv/config'
import './infra/postgres'
import express from 'express'
import { router } from './routes'

const app = express()

app.use(express.json())
app.use(router)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
