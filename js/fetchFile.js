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
$('.delete').click(() => {
    $.delete(MOVIES_URL)
})
fetch(MOVIES_URL, {
    method: 'DELETE'
})

const movieList = $.get(MOVIES_URL).done(response =>
    response.forEach((movie) =>{
        $('.delete').click(() => {
            $.delete(MOVIES_URL, movie.id)
        })
        $('#card1').append(`<ul> <li>
${movie.title}  ${movie.rating} 
<button class="delete">Delete</button>
</li> </ul>`)
    })
);
movieList
//button functionality
// function updateDiv()
// {
//     $( "#card1").load(window.location.href + " #card1" );
// }
$('#addButton').click(function(e){
    let addMovie = $('#addedMovie').val()
    console.log(addMovie)
    e.preventDefault()
    let appendingMovie = addMovie.split(',')
    $.post(MOVIES_URL, {title:appendingMovie[0], rating: appendingMovie[1]})
        .done()
})
