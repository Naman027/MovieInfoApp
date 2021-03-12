// const axios = require('axios');

function getMovies(searchText) {
    // console.log(searchText);

    axios.get('http://www.omdbapi.com/?s='+searchText + '&apikey=9be27fce')
    .then(function (response) {
        console.log(response);
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




 
