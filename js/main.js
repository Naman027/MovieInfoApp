function getMovies(searchText) {
    console.log(searchText);
}

$(document).ready(() => {
    $('#searchForm').on('submit',(e)=>{
        const searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    })
});




 
