const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema ({
    titulo: {
        type: String,
        required: true
    },
    resumen: {
        type: String,
        required: false
    },
    genero: {
        type: String,
        required: true
    },
    publicacion:{
        type: Date,
        required: true
    },
    disponible:{
        type: Boolean,
        required: true
    }

})

const Book = mongoose.model("Book", bookSchema)

module.exports = Book