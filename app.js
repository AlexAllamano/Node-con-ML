import express from "express";
import axios from "axios";

//EXPRESS
const app = express();
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const site = "MLA";
const accessToken =
  "APP_USR-4442668668440340-031510-d0efb429cc0046834ad98a7d064a6426-1331313532";
let busqueda = "botines adidas predator";
const url = `https://api.mercadolibre.com/sites/${site}/domain_discovery/search?q=${busqueda}`;

let categoria = {};



const getCategoria = async (busqueda) => {

  let configGetCategoria = {
    method: "get",
    maxBodyLength: Infinity,
    url: url,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  await axios(configGetCategoria)
    .then(function (response) {
      categoria = response.data[0];
    })
    .catch(function (error) {
      console.log(error);
    });
};


await getCategoria(busqueda);
console.log(categoria);
