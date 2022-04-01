const fetchMovies = async () => {
    const response = await fetch('https://api.airtable.com/v0/appJp2Hq2drLKu5VQ/Projects?api_key=key1SiX7gdNiDuSwT').then(data=> data.json())
    console.log(response);

    const moviesContainer=document.getElementById('movies-container');

    response.records.forEach(movie =>{
        console.log(movie.fields);
        const articleEl = document.createElement('article');
        const titleEl = document.createElement('div');
        const genreEl = document.createElement('div');
        const IMDBurl = document.createElement('div');
        const releaseDateEl = document.createElement('div');



        titleEl.innerHTML = movie.fields.Title;

        articleEl.append(titleEl,genreEl,IMDBurl,releaseDateEl);
        

        moviesContainer.appendChild(articleEl);
    });
    const linkTags = document.querySelectorAll('.imdb-link');
    console.log(linkTags);
    linkTags.forEach((link, index) => {
        const linkColor = link.style.color;
        link.id = `my-link-${index + 1}`;
        link.addEventListener('mouseover', (evt) => {
            link.style.color = "green";
        });

        link.addEventListener('mouseout', evt => {
            link.style.color = linkColor;
        });
    });

};

fetchMovies();

let test = document.getElementById("movies-container");


test.addEventListener("mouseenter", function( event ) {
  event.target.style.color = "purple";

  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);


test.addEventListener("mouseover", function( event ) {
  event.target.style.color = "orange";

  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

var Airtable = require('Movies');
var base = new Airtable({apiKey: 'https://api.airtable.com/v0/appJp2Hq2drLKu5VQ/Projects?api_key=key1SiX7gdNiDuSwT'}).base('appJp2Hq2drLKu5VQ');

base('Projects').select({
    maxRecords: 3,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Title'));
    });

    
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});
base('Projects').select({
  view: 'Grid view'
}).firstPage(function(err, records) {
  if (err) { console.error(err); return; }
  records.forEach(function(record) {
      console.log('Retrieved', record.get('Title'));
  });
});

