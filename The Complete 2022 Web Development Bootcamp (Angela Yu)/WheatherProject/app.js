const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res){

  const query = req.body.cityName;
  const untis = "metric"
  const appKey = apiKeyHere
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + appKey + "&units="+ untis

  https.get(url, function(response){
      console.log(response.statusCode);

      response.on("data", function(data){
          const wheatherData = JSON.parse(data);
          const temp = wheatherData.main.temp;
          const description = wheatherData.weather[0].description;
          const icon = wheatherData.weather[0].icon;

          res.write("<p>O tempo esta " + description + " hoje.</p>");
          res.write("<h1>A temperatura em " + query + " esta em " + temp + " graus Celsius.</h1>");
          res.write("<img src=http://openweathermap.org/img/wn/" + icon + ".png>")
          res.send();
        });
      });
});










app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
