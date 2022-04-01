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

// This handler will be executed only once when the cursor
// moves over the unordered list
test.addEventListener("mouseenter", function( event ) {
  // highlight the mouseenter target
  event.target.style.color = "purple";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

// This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener("mouseover", function( event ) {
  // highlight the mouseover target
  event.target.style.color = "orange";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

var Airtable = require('Movies');
var base = new Airtable({apiKey: 'https://api.airtable.com/v0/appJp2Hq2drLKu5VQ/Projects?api_key=key1SiX7gdNiDuSwT'}).base('appJp2Hq2drLKu5VQ');

base('Projects').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Title'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
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
