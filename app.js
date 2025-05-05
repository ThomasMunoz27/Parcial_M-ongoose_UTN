const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const bookRoutes = require("./libraryApi/routes/book.routes.js")
const authorsRoutes = require("./libraryApi/routes/author.routes.js")

dotenv.config()

const app = express()

app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URL, {dbname: process.env.MONGO_DB_NAME}).then(() => console.log("conectado a mongoose"))

const db = mongoose.connection

app.use("/books", bookRoutes)
app.use("/authors", authorsRoutes)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`)
})