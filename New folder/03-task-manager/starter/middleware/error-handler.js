const {customAPIError} = require('../error/custom-error')
const errorHandlerMiddleware = (err,req,res,next)=>{
    if(err instanceof customAPIError){
    return res.status(err.statusCode).json({msg:err.message})
}
return res.status(500).json({msg:'Something went wrong,  please try again later'})
}

module.exports = errorHandlerMiddleware