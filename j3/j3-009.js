const request = require('request')
const fs = require('fs')

request('https://pokeapi.co/api/v2/pokemon/', (err, res, data) => {
    const pokeResp = JSON.parse(data);
    let pokeImages = [];
    pokeResp.results.forEach(pokeman => {
        request(pokeman.url, (err, res, data) => {
            const resp = JSON.parse(data);
            pokeImages.push({ 'name': resp.name, 'image': resp.sprites.front_default });
            if (pokeImages.length === pokeResp.results.length) {
                let pokeCode = pokeImages.reduce((acc, pokeman) => {
                    return `${acc}<div><p><strong>${pokeman.name}</strong></p><img src='${pokeman.image}' /></div>`
                }, '')
                fs.writeFile(`./9.html`, pokeCode, () => { });
            }
        })
    })
})