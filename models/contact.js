

const contactSchema = new Schema(
    {
        name: String,
        email:  String,
        address: String,
        address2: String,
        city: String,
        state: {type: String, enum:['al','ak','az','ar','ca','co','ct','de','dc','fl','ga', 'hi','id','il','in','ia','ks','ky','la','me', 'md','ma','mi','mn','ms','mo','mt','ne', 'nv','nh','nj','nm','ny','nc','oh','ok','or','pa','ri','sc','sd','tn','tx','ut','vt','va','wa', 'wi','wy','as','gu','pr','vi']},
        zipcode: Number,
        comment: String,
        },{
          timestamps: true,  
})



module.exports = mongoose.model("Contact", contactchema);