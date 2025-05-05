const Book = require("../models/books")

exports.getAllBooks = async (req, res) => {
    try{
        const books = await Book.find()
        res.status(200).json(books)
    }catch (err){
        res.status(500).json({message: err.message})
    }
}

exports.getBookById = async (req, res) => {
    try{
        const book = await Book.findById(req.params.id)

        if(!book) res.status(404).json({message: "Libro no encontrado"})
        res.status(200).json(book)
    }catch (err){
        res.status(500).json({message: err.message})
    }
}

exports.postBook = async (req, res) => {
    try{
        const book = await Book(req.body)
        await book.save()

        if(!book) res.status(500).json({message: "Error al crear libro"})

        res.status(200).json(book)
    }catch (err){
        res.status(500).json({message: err.message})
    }
}

exports.putBook = async (req, res) => {
    try{
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new:true})
        if(!book) res.status(404).json({message: "Libro no encontrado"})

        res.status(200).json(book)
    }catch (err){
        res.status(500).json({message: err.message})
    }
}

exports.deleteBook = async (req, res) => {
    try{
        const book = await Book.findByIdAndDelete(req.params.id)

        if(!book) res.status(404).json({message: "Libro no encontrado"})

        res.status(200).json({message: "Libro eliminado"})
    }catch (err){
        res.status(500).json({message: err.message})
    }
}