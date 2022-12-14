var searchInput = document.querySelector(".search");
var itemWrapper = document.querySelector("main");

function displayMatches(matches) {
    itemWrapper.innerHTML = '';
    for (var matchObj of matches) {
        itemWrapper.insertAdjacentHTML("beforeend", `
        <div class= "movie-item"
            style = "
            background-image: linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)),
            url(${matchObj.image_url})
            "
            <h3>${matchObj.title}</h3>
            <p>${matchObj.description}</p>
            <a href="${matchObj.imdb_url}">View more Details</a>
            
    
        </div>
    `);
    console.log(matchObj.image_url);
    }
}

function getMovieData(event) {
    var keyCode = event.keyCode;
    console.log(keyCode);
    var inputData = searchInput.value.trim().toLowerCase();
    console.log(inputData);
    if (keyCode === 13 && inputData) {
        var matches = [];
        console.log("works");
        for (var movie of movieData) {
            if (movie.title.toLowerCase().includes(inputData)) {
                console.log("match!");
                matches.push(movie);
            }
        }
        console.log(matches);
        displayMatches(matches);
    }

}

function init() {
    searchInput.addEventListener("keydown", getMovieData)
}

init();

// Grab html elements
// Get the input's value on enter key press
// Grab data related to user's search
// Inject the movie items in the DOm, based on user's search