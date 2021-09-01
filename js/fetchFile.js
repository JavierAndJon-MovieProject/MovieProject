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
let database = $(".card1")
    // <!--    initial page loading message-->
$(window).on('load', function () {
    $('#loading').hide();
});


// $('.delete').click(() => {
// let idMovie= $(this).attr("data-id")
// })

//movies list get request
const movieList = $.get(MOVIES_URL).done(response => {
    response.forEach((movie) => {
        $('#card1').append(`<ul> <li>
${movie.id}
${movie.title} 
${movie.rating}
<button class="delete" data-id="${movie.id}">Delete</button>
</li> </ul>`)
    })
    $('.delete').click(function() {
        let idMovie = $(this).attr('data-id')
       deleteMovie(idMovie)
    })
});
//button functionality
// function updateDiv()
// {
//     $( "#card1").load(window.location.href + " #card1" );
// }
//adding a movie button
$('#addButton').click(function(e){
    let addMovie = $('#addedMovie').val()
    console.log(addMovie)
    e.preventDefault()
    let appendingMovie = addMovie.split(',')
    $.post(MOVIES_URL, {title:appendingMovie[0], rating: appendingMovie[1]})
        database.remove()
});

//editing a movie button
$('#editMovie').click((e) => {
    e.preventDefault()
    let idChanger = $('#idMovie').val()
    let newerMovie = $('#newMovie').val()
    let newerRating = $('#newRating').val()
    fetch("https://oasis-roasted-indigo.glitch.me/movies/" + idChanger,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body:
            JSON.stringify({
                title: newerMovie,
                rating: newerRating
            })
    }).then(res => res.json())
        .catch(console.error)
})
// failed attempt
//     const changeMovie = movie => fetch(`${MOVIES_URL}/${movie.id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//         title rating
//         )
//     })
//         .then(res => res.json())
//         .then(data => {
//             console.log(`Success: edited ${JSON.stringify(data)}`);
//         })
//         .catch(console.error);
// })

const deleteMovie = id => fetch(`${MOVIES_URL}/${id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(res => res.json())
    .then(() => {
        console.log(`Success: Deleted movie with the id of ${id}`);
    })
    .catch(console.error);