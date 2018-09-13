
//se extraen los links usando marked
const marked = require("marked");
//se requiere fs para leer el documento
const fs = require('fs');
//se require path para validar el archivo con extname
const path = require('path');
//se requiere fetch para hacer llamadas http
const fetch = require('node-fetch');
//devolver el directorio actual
const fileName = process.cwd();
// // Recibe texto en markdown y retorna sus links en un arreglo
const mdLinks = function getLinks(md) {
  const arrayLinks = [];
  const renderer = new marked.Renderer();
  renderer.link = (href, title, text) => {
    arrayLinks.push({
      href: href,
      text: text,
      title: title
    });
  };
  marked(md, {renderer: renderer});
  return arrayLinks;
  console.log(arrayLinks);
};
 //Lee el directorio
fs.readdir(fileName, (err, files) => {
    if (err) {
      console.log("no hay archivo");
    } else {
      files.forEach(file => {
//validar que la extension del archivo sea .md
        if (path.extname(file) === '.md') {
//leer archivo
          fs.readFile(file, 'utf8', function(err, data) {
            if (err) { 
              console.log(err);
            } else {
//iterar data
              mdLinks(data).forEach(element => {
                  fetch(`${element.href}`).then((response) => {
//imprimir link, texto y archivo donde se encontrò                    
                    console.log(`file: ${file} Text: ${element.text} href: ${element.href}`);
                  }).catch((err) => {
//validar si esta roto
                   console.log(`roto: file: ${file} Text: ${element.text} href: ${element.href}`); });
                });
            }
          });
        }
      });
    }
  });
module.exports = mdLinks;



