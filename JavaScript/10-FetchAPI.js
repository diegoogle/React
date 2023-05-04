//Fetch API es una librería para hacer peticiones web.
//GIPHY ApiKey: Je2z5dinBbVZHN40Lx25tQ4OlVkiZpdI

const ApiKey = 'Je2z5dinBbVZHN40Lx25tQ4OlVkiZpdI';

const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ApiKey}`);

httpCall
    .then( Response => Response.json())
    .then( ({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })    
    .catch(console.warn);