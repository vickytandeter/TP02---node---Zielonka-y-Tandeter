import { URL } from 'url';

let url    = null;
let objeto = null;

url = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';


objeto = parsearUrl(url);

console.log(objeto);

function parsearUrl(urlA){
    try {
        const url = new URL(urlA);

        return {
            host: url.origin,
            pathname: url.pathname,
            parametros: url.searchParams
        };

    } catch (error) {
        console.error('Error:', error.message);

        return {
            host: null,
            pathname: null,
            parametros: null
        };
    }
}