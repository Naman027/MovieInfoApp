// const axios = require('axios');

function getMovies(searchText) {
    // console.log(searchText);

    axios.get('http://www.omdbapi.com/?s='+searchText + '&apikey=9be27fce')
    .then(function (response) {
        console.log(response);
        const movies = response.data.Search;
        let output = '';

        $.each(movies, function (index,movie){
            output += `
                <div class="col-md-3">
                    <div class="well text-center">
                        <img src="${movie.Poster}">
                        <h5> ${movie.Title} </h5>
                        <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
                    </div>
                </div>  
            `
        });

        $('#movies').html(output);
    })
    .catch(function (err) {
        console.log(err);
    });

}

function movieSelected(id){
    sessionStorage.setItem('movieId',id);
    window.location = 'movie.html';
    return false;
}

function getMovie(){
    const movieId = sessionStorage.getItem('movieId');

    axios.get('http://www.omdbapi.com/?i='+movieId + '&apikey=9be27fce')
    .then(function (response) {
        console.log(response);
        const movie  = response.data;

        let output = `
            <div class = "row">
                <div class="col-md-4">
                    <img src="${movie.Poster}" class="thumbnail">
                    <h4> 
                        ${movie.Title} </h4>
                </div>

                <div class="col-md-8">
                    <ul class="list-group">
                        <li class="list-group-item"><strong>Genre : </strong>${movie.Genre}</li> 
                        <li class="list-group-item"><strong>Released : </strong>${movie.Released}</li>
                        <li class="list-group-item"><strong>Rated : </strong>${movie.Rated}</li> 
                        <li class="list-group-item"><strong>IMDB Rating : </strong>${movie.imdbRating} out of 10</li> 
                        <li class="list-group-item"><strong>Directors : </strong>${movie.Director}</li> 
                        <li class="list-group-item"><strong>Writer : </strong>${movie.Writer}</li> 
                        <li class="list-group-item"><strong>Actors : </strong>${movie.Actors}</li>  
                        <li class="list-group-item"><strong>Plot : </strong>${movie.Plot}</li>
                        </ul>
                        <hr>
                        <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">IMDB Page</a>
                        <a href="index.html" class="btn btn-default">Home Page</a>
                </div>
            </div>
        `;

        $('#movie').html(output);
    })
    .catch(function (err) {
        console.log(err);
    });

}

$(document).ready(() => {
    $('#searchForm').on('submit',(e)=>{
        const searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    })
});




 
