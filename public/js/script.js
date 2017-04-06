

var apiKey = "1548985a281744b09be735431b84f704";
var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json";

var q = prompt("What are you searching now?", "china");
var query = "?q=" + q + "&sort=newest";
var fullURL = url+query+"&api-key="+apiKey;

function setup() {
  noCanvas();
  loadJSON(fullURL, gotData);
}

function gotData(rawdata) {
  var data = rawdata.response.docs;
  console.log(data);

  for (var i=0; i<data.length; i++) {
    var headline = createElement('h3', '');
    var link = createA(data[i].web_url, data[i].headline.main);
    link.parent(headline);
    headline.parent('results');

    var para = createP(data[i].lead_paragraph);
    para.parent('results');
  }
}


// var apiKey = "2559268d4628fb08439cec7e4ff76010";
// GET https://api.darksky.net/forecast/0123456789abcdef9876543210fedcba/42.3601,-71.0589,409467600?exclude=currently,flags

// {
//   "latitude": 42.3601,
//   "longitude": -71.0589,
//   "timezone": "America/New_York",
//   "hourly": {
//     "summary": "Snow (3–6 in.) and dangerously windy starting in the afternoon.",
//     "icon": "snow",
//     "data": [
//       {
//         "time": 255589200,
//         "summary": "Mostly Cloudy",
//         "icon": "partly-cloudy-night",
//         "precipIntensity": 0,
//         "precipProbability": 0,
//         "temperature": 23.47,
//         "apparentTemperature": 17.05,
//         "dewPoint": 16.42,
//         "humidity": 0.74,
//         "windSpeed": 5,
//         "windBearing": 350,
//         "visibility": 9.6,
//         "cloudCover": 0.78,
//         "pressure": 1026.79
//       },
//       ...
//     ]
//   },
//   "daily": {
//     "data": [
//       {
//         "time": 255589200,
//         "summary": "Mixed precipitation (3–6 in. of snow) and windy starting in the afternoon.",
//         "icon": "snow",
//         "sunriseTime": 255613996,
//         "sunsetTime": 255650764,
//         "moonPhase": 0.97,
//         "precipIntensity": 0.0338,
//         "precipIntensityMax": 0.17,
//         "precipIntensityMaxTime": 255657600,
//         "precipProbability": 0.87,
//         "precipType": "snow",
//         "precipAccumulation": 6.485,
//         "temperatureMin": 23.33,
//         "temperatureMinTime": 255600000,
//         "temperatureMax": 34,
//         "temperatureMaxTime": 255632400,
//         "apparentTemperatureMin": 11.87,
//         "apparentTemperatureMinTime": 255650400,
//         "apparentTemperatureMax": 21.44,
//         "apparentTemperatureMaxTime": 255632400,
//         "dewPoint": 26.15,
//         "humidity": 0.86,
//         "windSpeed": 24.52,
//         "windBearing": 57,
//         "visibility": 4.69,
//         "cloudCover": 0.96,
//         "pressure": 1016.49
//       }
//     ]
//   }
// }