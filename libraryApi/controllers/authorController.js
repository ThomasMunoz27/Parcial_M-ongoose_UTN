const Author = require("../models/author")
const Book = require("../models/books")

exports.getAllAuthors = async (req, res) => {
    try{
        const authors = await Author.find().populate("libros")
        res.status(200).json(authors)
    }catch (err){
        res.status(500).json({message: err.message})
    }
}

exports.getAuthorById = async (req, res) => {
    try{
        const author = await Author.findById(req.params.id).populate("libros")

        if(!author) res.status(404).json({messaje: "Autor no encontrado"})

        res.status(200).json(author)
    }catch (err){
        res.status(500).json({message: err.message})
    }
}

exports.postAuthor = async (req, res) => {
    try{
        const author = await Author(req.body)
        await author.save()
        if(!author) res.status(500).json({messaje: "Error al crear el autor"})
        res.status(200).json(author)
    }catch (err){
        res.status(500).json({message: err.message})
    }
}

exports.putAuthor = async (req, res) => {
    try{
        const author = await Author.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!author) res.status(404).json({messaje: "Autor no encontrado"})
        res.status(200).json(author)
    }catch (err){
        res.status(500).json({message: err.message})
    }
}

exports.deleteAuthor = async (req, res) => {
    try{
        const author = await Author.findByIdAndDelete(req.params.id)

        if(!author) res.status(404).json({messaje: "Autor no encontrado"})

        res.status(200).json({message: "Autor eliminado"})
    }catch (err){
        res.status(500).json({message: err.message})
    }
}

exports.addBookToAuthor = async (req, res) => {
    try{
        const author = await Author.findById(req.params.id)
        const book = await Book.findById(req.params.bookId)

        if(!author || !book){
            return res.status(404).json({message: "No se encontró un recurso"})
        }

        if(!author.books.includes(book._id)){
            author.books.push(book._id)
            await author.save()
        }

        res.status(200).json(author)
    }catch (err){
        res.status(500).json({message: err.message})
    }
    
}
