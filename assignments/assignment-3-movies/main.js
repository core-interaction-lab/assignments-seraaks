const db = {
    id: 'appJp2Hq2drLKu5VQ',
    table: 'movies',
    apiKey: 'key1SiX7gdNiDuSwT'
};

const airtableUrl = `https://api.airtable.com/v0/${db.id}/${db.table}?maxRecords=100&view=Grid%20view&api_key=${db.apiKey}`

const fetchMovies = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    console.log(response);


    const myObject = {
        title: 'movie',
        release_date: '334824',
    }

    const myArray= ['movie',334824,'example']

    console.log (myObject.release_date)
    console.log(myArray[0]);

    const container = document.getElementById('textures-container');


    response.records.forEach((movie)=>{
        console.log(movie);
        if (movie.fields.image){
            console.log(movie.fields.image[0].url);
            const posterImg = document.createElement('img');
            posterImg.setAttribute('src',movie.fields.image[0].url)
            container.append(posterImg);
        }


    });
};

fetchMovies();