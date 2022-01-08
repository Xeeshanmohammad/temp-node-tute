const authorize = (req,res,next)=>{
    const {user}=req.query
    if(user=='john'){
        req.user = {name:'John',id:2}
    }
    else{
        res.status(401).send('Unauthorized')
    }
    next()

}
module.exports = authorize