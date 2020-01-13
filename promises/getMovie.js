const apiKey = `e9ddb24aed6d48c4342303aba5269e28`;
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
const imgUrl = `http://image.tmdb.org/t/p/w300/`;

function getMovieData(movieTitle){
    return new Promise((resolve, reject)=>{
        const url = `${apiUrl}${movieTitle}`;
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

    Promise.race([movie1,movie2,movie3]).then((data)=>{
        const moviesElement = document.getElementById('movies')
        console.log(data);

        moviesElement.innerHTML += `<img src="${imgUrl}${data.results[0].poster_path}" />`
        
    })
    
    // movieResponse.then((movieData)=>{
    //     document.getElementById('movies').innerHTML = `<img src="${imgUrl}${movieData.results[0].poster_path}" />`
    // })
})



// const movieTitles = document.querySelectorAll('.movie-title');
// call getMovieData with all the results in movieTitles
// wait until ALL of them are done.
// Then update the DOM with the results fmor ALL of them
