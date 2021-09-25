const express = require("express");
const app = express();
const fs = require("fs");
const { Download} = require('./s3');

var request = require('request');
const port = process.env.PORT || 5000; 

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/video", function (req, res) {
  const result = Download('Crater_Lake_Astro_Timelapse_2.mp4');
  res.send(result);
});

//unathenticated slow way to get the video
app.get('/plant/:id',function(req,res){
    request(`https://plant-lapse-bucket.s3.us-east-2.amazonaws.com/EtherPlant-${req.params.id}.mp4`).pipe(res); 
  });

app.listen(8000, function () {
  console.log(`Listening on port ${port}!`);
});