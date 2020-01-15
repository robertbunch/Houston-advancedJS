const apiKey = `e9ddb24aed6d48c4342303aba5269e28`;
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
const imgUrl = `http://image.tmdb.org/t/p/w300/`;
const castUrl = `https://api.themoviedb.org/3/movie/`

function getCast(movieId){
    return new Promise(async(resolve, reject)=>{
        const url = `${castUrl}${movieId}/credits?api_key=${apiKey}`
        const castData = await fetch(url);
        const castDataAsJSON = await castData.json();
        resolve(castDataAsJSON);
    });
}

function getMovieData(movieTitle){
    return new Promise(async(resolve, reject)=>{
        const url = `${apiUrl}${movieTitle}`;
        const movieData = await fetch(url);
        resolve(await movieData.json())
    })
}

document.getElementById('movie-form').addEventListener('submit',async(e)=>{
    e.preventDefault();
    const titles = document.querySelectorAll('.movie-title');
    const title1 = titles[0].value
    const title2 = titles[1].value
    const title3 = titles[2].value

    const movie1 = getMovieData(title1);
    const movie2 = getMovieData(title2);
    const movie3 = getMovieData(title3);

    // Promise.race([movie1,movie2,movie3]).then((data)=>{
    const moviesData = await Promise.all([movie1,movie2,movie3]);
    const moviesElement = document.getElementById('movies')

    moviesData.forEach(async(movieData,i)=>{
        const topMovie = movieData.results[0]
        const castData = await getCast(topMovie.id)
        moviesElement.innerHTML += `
            <div class="col-sm-4">
                <img src="${imgUrl}${topMovie.poster_path}" />
                <br />
                Starring: ${castData.cast[0].name}
            </div>
            `
    })        
})

// 1. Get the text out of the input box
// 2. Fetch the JSON for all movies that match this string/text
// 3. Grab the first 1 of the 20 we get
// 4. Use the ID of that one, to go get the cast of that movie
