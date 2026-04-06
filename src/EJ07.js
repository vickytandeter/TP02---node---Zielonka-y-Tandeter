import currencyMap from 'currency-map-country';

let monedaDelPais, codigoPais;

codigoPais = 'AR';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function obtenerMoneda(codigoPais) {
    try {
        const moneda = currencyMap.getCurrency(codigoPais);
        return moneda || null;

    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
}
