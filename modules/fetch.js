const fetch = require('node-fetch');

const getValues = async () => {
    const response = await fetch('https://www.avito.ru/orel/telefony?f=ASgCAQICAUD2vA0UlNI0&pmin=20000&q=iphone+xr&s=104');
    return await response.text();
}

module.exports = getValues;