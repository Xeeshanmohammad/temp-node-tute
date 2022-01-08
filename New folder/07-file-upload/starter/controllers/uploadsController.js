//download npm express file-upload
const cloudinary = require('cloudinary').v2
const path = require('path')
const CustomAPIError = require('../errors')
const { StatusCodes } = require('http-status-codes')
const fs = require('fs')

const uploadImageProductsLocal = async (req, res) => {
    //    console.log(req.files)
  if(!req.files){
      throw new CustomAPIError.BadRequestError('No file upload')
  }

    let ProductImage = req.files.image
    if(!ProductImage.mimetype.startsWith('image')){
      throw new CustomAPIError.BadRequestError('Please upload image')

    }
    const maxSize = 2 *1024 * 1024
    if(ProductImage.size > maxSize){
      throw new CustomAPIError.BadRequestError('Please upload image smaller than 1kb')

    }
    const imagePath = path.join(__dirname,'../public/upload/' + `${ProductImage.name}`)
    await ProductImage.mv(imagePath)

    res.status(StatusCodes.OK).json({ image: { src: `/upload/${ProductImage.name}` } })
}

const uploadImageProducts = async(req,res)=>{
  const result = await cloudinary.uploader.upload(req.files.image.tempFilePath,{
    use_filename:true, 
    folder:'file-upload',
  });
  // console.log(result);
  fs.unlinkSync(req.files.image.tempFilePath)
  return res.status(StatusCodes.OK).json({image:{src:result.secure_url}})
}


module.exports = { uploadImageProducts }