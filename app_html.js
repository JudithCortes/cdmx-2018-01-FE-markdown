
'use strict';

//se requiere request para hacer una solicitud http
const request = require('request');
//requerimos el modulo cheerio para extraer los links
const cheerio = require('cheerio');
//se usa modulo de node fs(fileSystem) que se comunica con 
//el sistema de archivos
const fs = require("fs");
//se requiere el modulo path para validar la ruta
const path = require("path");
//se require marked para analizar el texto(parseado)
const marked = require("marked");
const fetch = require("fetch");

//validar que la ruta esta normalizada y es absoluta
function isAbsolute(p) {
    console.log(path.normalize(p + '/') === path.normalize(path.resolve('README.md') + '/'));
//se guarda en una variable la ruta normalizada
const url = path.normalize( p+ '/') === path.normalize(path.resolve('README.md') + '/');
}
//convertir a HTML con marked

//extraer los links con cheerio

cheerio . load ( ' <a href="foo"> </a> ' ). root () encontrar ( ' a ' ). attr ( ' href ' );

var url = 'README.md';

var customHeaderRequest = request.defaults({
    headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64',
AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'}
})

customHeaderRequest.get(url, function(err, resp, body){
  $ = cheerio.load(body);
  links = $('a');
  $(links).each(function(i, link){
    console.log($(link).text());
  });
});

//mdLinks resuelve una promesa y retorna un array de links
const mdLinks= (ruta,options)=>{
const arrayLinks = [];
//llamamos a fetch con la url a la que queremos acceder como parametro
//esta llamada nos devuelve una promesa
fetch(url)
    .then(function(res) {
        return res.text();
        for(){
          arrayLinks.push({
              href: res.url,
              text: text ,
              file:file
          });
    })
    .then(function(data) {
        console.log('data = ', data);
        validateLinks(data){},
        statsLinks(data);
    })
    .catch(function(err) {
        console.error(err);
    });
}
}

const statsLinks = () =>{

request('url', function (error, response, body) {
  console.log('error:', error); // imprimir si ocurre un error
  console.log('statusCode:', response && response.statusCode); //imprimir el estatus del link
  console.log('body:', body); // Imprima el HTML para la página de inicio de Google.

});
}

