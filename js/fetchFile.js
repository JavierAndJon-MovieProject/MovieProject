"use strict";

// const option = {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json'
//     },
    // body : JSON.stringify({
    //
    // })
// };

const MOVIES_URL = "https://oasis-roasted-indigo.glitch.me/movies"

    // <!--    initial page loading message-->
$(window).on('load', function () {
    $('#loading').hide();
});

//movies list get request
$('.delete').click(() => {
    $.delete(MOVIES_URL)
})
// fetch(MOVIES_URL, {
//     method: 'DELETE'
// })

const movieList = $.get(MOVIES_URL).done(response =>
    response.forEach((movie) =>{
        $('.delete').click(() => {
            $.delete(MOVIES_URL, movie.id)
        })
        $('#card1').append(`<ul> <li>
${movie.id} ${movie.title}  ${movie.rating} 
<button class="delete">Delete</button>
</li> </ul>`)
    })
);
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
$('#editMovie').click((e) => {
    e.preventDefault()
    let idChanger = $('#idMovie').val()
    let newerMovie = $('#newMovie').val()
    let newerRating = $('#newRating').val()
    console.log(newerMovie)
    console.log(newerRating)
    fetch("https://oasis-roasted-indigo.glitch.me/movies/" + idChanger,{
        method: 'PUT',
        body: {
            title: 'newerMovie',
            rating: 'newerRating'
        }
    })
})
// const changeMovie = movie => fetch(`${MOVIES_URL}/${movie.id}`, {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(movie)
// })
//     .then(res => res.json())
//     .then(data => {
//         console.log(`Success: edited ${JSON.stringify(data)}`);
//     })
//     .catch(console.error);

// fetch('DOMAIN_NAME/movies/{id}', {
//     method: 'PUT'
//     body: {
//         title: titleFromUser
//         rating: ratingFromUser
//     }
// })

