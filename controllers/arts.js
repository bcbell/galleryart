const Art =require('../models/art')

module.exports={
    index
}

function index(req, res){
    Art.find({})
    .then((arts)=>{
        res.render('artist/arts',{ title: 'The Happy Crafter by Sarai Coleman', arts})
    })
}