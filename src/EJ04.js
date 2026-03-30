import fs from 'fs';

const ARCHIVO_ENTRADA           = "./archivo-entrada.txt";
const ARCHIVO_SALIDA            = "./archivo-salida.txt";

copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);

function copiar(origen, destino){

    fs.copyFile(origen, destino)

}