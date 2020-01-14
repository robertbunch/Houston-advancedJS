const apiKey = `e9ddb24aed6d48c4342303aba5269e28`;
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
const imgUrl = `http://image.tmdb.org/t/p/w300/`;


function getCast(movieId){
    return new Promise((resolve, reject)=>{
        const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
        const castData = fetch(url);

        const castDataAsJSON = castData.then((response)=>{
            return response.json();
        }).catch((err)=>{})

        castDataAsJSON.then((finalCastData)=>{
            resolve(finalCastData);
        })
    })
}

function getMovieData(movieTitle){
    return new Promise((resolve, reject)=>{
        const url = `${apiUrl}${movieTitle}`;
        // const url = `https://api.themoviedb.org/3/search/movie?api_key=e9ddb24aed6d48c4342303aba5269e28&query=alien`;
        const movieData = fetch(url);
            const movieDataAsJson = movieData.then((response)=>{
            return response.json();
        }).catch((err)=>{
            console.log(err);
        })

        movieDataAsJson.then((movieData2)=>{
            resolve(movieData2);
        })
    })
}


document.getElementById('movie-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    // const movieTitle = document.getElementById('movie-title').value;
    // const movieResponse = getMovieData(movieTitle);
    const titles = document.querySelectorAll('.movie-title');
    const title1 = titles[0].value
    const title2 = titles[1].value
    const title3 = titles[2].value

    const movie1 = getMovieData(title1);
    const movie2 = getMovieData(title2);
    const movie3 = getMovieData(title3);

    // Promise.race([movie1,movie2,movie3]).then((data)=>{
    Promise.all([movie1,movie2,movie3]).then((data)=>{
        const moviesElement = document.getElementById('movies')
        console.log(data);

        // moviesElement.innerHTML += `<img src="${imgUrl}${data.results[0].poster_path}" />`
        data.map((movieData,i)=>{
            const topMovie = movieData.results[0]
            getCast(topMovie.id).then((castData)=>{
                document.getElementById('movies').innerHTML += `
                    <div class="col-sm-4">
                        <img src="${imgUrl}${topMovie.poster_path}" />
                        <br />
                        Starring: ${castData.cast[0].name}
                    </div>
                    `
                })
            })        
    })
})

// 1. Get the text out of the input box
// 2. Fetch the JSON for all movies that match this string/text
// 3. Grab the first 1 of the 20 we get
// 4. Use the ID of that one, to go get the cast of that movie
