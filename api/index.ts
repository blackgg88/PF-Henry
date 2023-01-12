import { connect, set } from 'mongoose'
import server from './src/app'

set('strictQuery', true)

import { DB_USER, DB_PASSWORD, DB_NAME, DB, PORT } from './config'

async function connectDB() {
  await connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_NAME}.${DB}`)
  server.listen(PORT, () => {
    console.log(`Listening at ${PORT}`)
  })
}

connectDB()
