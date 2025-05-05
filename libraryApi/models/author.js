const mongoose = require("mongoose")

const authorShema = new mongoose.Schema ({
    nombre:{
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: false
    },
    fechaNacimiento: {
        type: Date,
        required: true
    },
    nacionalidad:{
        type: String,
        required: true
    },
    libros:[{
        type: mongoose.Schema.Types.ObjectId, ref: "Book"
    }]
})

const Author = mongoose.model("Author", authorShema)

module.exports = Author