const express = require('express');
const fs  = require('fs');
const util  = require('util');
const { Download} = require('./s3');
const app = express();

app.get('/', async (req, res) => {
    //Crater_Lake_Astro_Timelapse_2.mp4
    //get file from s3 Download
    
    const result = Download('Crater_Lake_Astro_Timelapse_2.mp4');
    res.send(result);
});


app.listen(3000, () => {
    console.log('Server started on port 3000');
}   );