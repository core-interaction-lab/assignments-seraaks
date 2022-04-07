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

    const container = document.getElementById('movies-container');


    response.records.forEach((movie)=>{
        console.log(movie);
        if (movie.fields.poster){
            console.log(movie.fields.poster[0].url);
            const posterEl = document.createElement('img');
            posterEl.innerHTML = movie.fields.poster;
            posterImg.setAttribute('src',poster.fields.img[0].url)
            container.append(posterEl);

        }

        if(movie.fields.genre){
            console.log(movie.fields.genre[0]);
            const genreEl = document.createElement('p');
            genreEl.innerHTML = movie.fields.genre;
            genreEl.classList.add('movie-genre')
            container.append(genreEl);

        }


    });
};

fetchMovies();