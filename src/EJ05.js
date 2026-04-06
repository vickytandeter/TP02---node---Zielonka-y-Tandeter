import { URL } from 'url';

let url    = null;
let objeto = null;

url = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';

objeto = parsearUrl(miUrl);

console.log(miObjeto);

function parsearUrl(url){
    const urlA = new URL(url);

    return {
        host: urlA.origin,
        pathname: urlA.pathname,
        parametros: urlA.searchParams
    };
}