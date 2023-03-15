import express from "express";
import axios from "axios";



//EXPRESS
const app = express();
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




const site = "MLA";
const accessToken = "APP_USR-4442668668440340-031510-d0efb429cc0046834ad98a7d064a6426-1331313532";
let busqueda = "celular moto g200";

const url = `https://api.mercadolibre.com/sites/${site}/domain_discovery/search?q=${busqueda}`;


var config = {
    method: 'get',
  maxBodyLength: Infinity,
    url: url,
    headers: { 
      'Authorization': `Bearer ${accessToken}`
    }
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
  