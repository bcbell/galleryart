const Artwork =require('../models/artwork')

module.exports={
    index
}

function index(req, res){
    Artwork.find({})
    .then((artworks)=>{
        res.render('artist/gallery',{title: 'The Gallery', artworks})
    })
}
