const mongoose= require('mongoose')
const Schema = mongoose.Schema

const artworkSchema = new Schema ({
    name : String,
    price : String
})

module.exports = mongoose.model('Artwork', artworkSchema)