import currencyMap from 'currency-map-country';

console.log(currencyMap);

let monedaDelPais, codigoPais;

codigoPais = 'AR';
monedaDelPais = getCurrencyAbbreviation(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'US';
monedaDelPais = getCurrencyAbbreviation(codigoPais);
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
