const request = require('request');
const apiKey = process.env.API_KEY;


const getGeolocation = (response, lat, long)=>{
  const responseToClient = (res,data)=>{
    res.send(data)
  }
  request("https://www.googleapis.com/geolocation/v1/geolocate?key=" + apiKey, function  (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body);
    console.log(typeof body)
    const parsedBody = JSON.parse(body)
    console.log(parsedBody)
  });
}

module.exports = getGeolocation;
