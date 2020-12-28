const Art =require('../models/art')

module.exports={
    index
}

function index(req, res){
    Art.find({})
    .then((arts)=>{
        res.render('artist/arts',{ title: 'The Uri Collection by Sarai Coleman', arts})
    })
}