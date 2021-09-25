const S3 = require('aws-sdk/clients/s3')
require("dotenv").config()
const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

const s3 = new S3({
region,
accessKeyId, 
secretAccessKey
})

//get file from s3
const Download = async (fileName) => {
    var params = {
        Bucket: bucketName,
        Key: fileName
    }
s3.getObject(params, function(err, data) {
    if (err) {
        console.log(err, err.stack)
    }
    }
)
stream.createReadStream()
// Add the content type to the response (it's not propagated from the S3 SDK)
 res.set('Content-Type', data.ContentType);
 res.set('Content-Length', data.ContentLength);
 res.set('Last-Modified', data.LastModified);
 res.set('ETag', data.Tag);
stream.pipe(stream);
}
    

//upload file to s3
const Upload = async (file, fileName) => {
    try {
        const result = await s3.upload(bucketName, fileName, file)
        return result
    } catch (error) {
        console.log(error)
    }
}

module.exports = { Upload, Download }