console.log("Inicio de la aplicacion");
var http = require('http');
const axios = require('axios');
var url = require('url');

http.createServer(async function (req, res) {
   // res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.writeHead(200, { 'Content-Type': 'application/json' });
    console.log(req.url)
    var q = url.parse(req.url, true).query;
    // console.log(q.ciudad);
    // console.log(q.pathname);
    let strUrl = req.url;
    if (strUrl.includes("clima")) {
        const options = {
            method: 'GET',
            url: 'https://weather-api138.p.rapidapi.com/weather',
            params: {
                city_name: q.ciudad
            },
            headers: {
                'X-RapidAPI-Key': '3140abbdc0msh261a2dd68065cf1p11f9fbjsn6783d106a10d',
                'X-RapidAPI-Host': 'weather-api138.p.rapidapi.com'
            }
        };
        axios.request(options)
            .then((response) => {
                console.log(response)
                let strHTML = `<div> <label><b>Temperatura: </b> ${(parseFloat( response.data.main.temp) - 273.15)} </label> </div>`;
                let objRespuesta = {
                    temperatura : (parseFloat( response.data.main.temp) - 273.15),
                    amanecer :  new Date(parseInt(response.data.sys.sunrise)*1000).toISOString()
                }
               res.write(JSON.stringify(objRespuesta));
                //res.write(strHTML);
                res.end();
            })
            .catch((error) => {
                console.log("Hubo un error en la aplicacion")
                console.log(error);
            });

    }
    else {
        res.write(JSON.stringify({ data: "cualquiercosa" }));
        res.end();
    }

}).listen(8080);
