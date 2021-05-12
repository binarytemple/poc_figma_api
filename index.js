
import * as Figma from 'figma-js';


const client = Figma.Client({
    personalAccessToken: process.env.FIGMA_API_TOKEN
});


var ff = client.file("Oix3zxIoPPhW9KWEwK45uL").then(function (response) {
    // handle success

    console.log(JSON.stringify(response.data));
})

