const db = {
    id: 'app6tWUyaSErIMMOh',
    table: 'textures',
    apiKey: 'key1SiX7gdNiDuSwT'
};

const airtableUrl = `https://api.airtable.com/v0/${db.id}/${db.table}?maxRecords=100&view=Grid%20view&api_key=${db.apiKey}`

const fetchMovies = async () => {
    const response = await fetch('https://api.airtable.com/v0/${db.id}/${db.table}?maxRecords=100&view=Grid%20view&api_key=${db.apiKey}').then(data => data.json());

    console.log(response);

    const moviesContainer = document.getElementById('textures-container');

    response.records.forEach(texture => {
        console.log(texture.fields);
        const imageEl = document.createElement('article');
        const descriptionEl = document.createElement('div');
        const maincolorEl = document.createElement('div');
        const mainmaterialEl = document.createElement('a');

        descriptionEl.innerHTML = texture.fields.description;
        maincolorEl.innerHTML = texture.fields.maincolor;

       

        articleEl.append(imageEl, descriptionEl, maincolorEl, mainmaterialEl);

        texturesContainer.appendChild(articleEl);
    });

   
};

fetchMovies();
