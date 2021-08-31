"use strict";

const option = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    // body : JSON.stringify({
    //
    // })
};

const MOVIES_URL = "https://oasis-roasted-indigo.glitch.me/movies"

    // <!--    initial page loading message-->
$(window).on('load', function () {
    $('#loading').hide();
});

//movies list get request
const movieList = $.get(MOVIES_URL).done(response =>
    response.forEach(function(movie){
        console.log(movie)
        $('#card1').append(`<ul> <li> ${movie.title} </li> </ul>`)
    })
);
movieList
//button functionality
$('#addButton').click(function(e){
    let addMovie = $('#addedMovie').val()
    console.log(addMovie)
    e.preventDefault()
    $.post(MOVIES_URL, {title:addMovie, rating: '1'})
        .done()
})