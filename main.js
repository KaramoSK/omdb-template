/**
 *  OMDb template
 *	Documentation: http://www.omdbapi.com/
 *  Generate an API key here: http://www.omdbapi.com/apikey.aspx
 */


/**
* According to documentation, you need at least 2 parameters when calling the API http://www.omdbapi.com/
* 1 Required parameter: apikey
* 2 Required parameter: One of the following i=, t= or s=
*
* 
* Example with parameter s=star trek
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek
*
* Example with parameter s=star trek AND y=2020
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&y=2020
*
* Example with parameter s=star trek AND type=series
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&type=series
*
*/

// OMDb api-key c8b2cdc0

//******************************************************************************************
// const endpoit = 'http://www.omdbapi.com/?apikey=c8b2cdc0&s=spider-man'

// const omdbGet = fetch(endpoit);
// const diplayDiv = document.getElementById('display')
// const displayEl = document.querySelector("#data-output");

// omdbGet
//     .then((response => {
//         return response.json()
//     }))
//     .then((data) => {
//         console.log(data)
        
//         let movies = data.Search;
        
//         let out = "";
//         for( let movie of movies) {
//             out += `
//             <article>
//                 <h2>${movie.Title}</h2>
//                 <img src=${movie.Poster}>
//             </article>
//             `
//         }
             
 
//         diplayDiv.innerHTML = out + " hej hpå";
    
//     })
//     .catch(handleError)


// function handleError (err) {
//     console.log("OH NO!");
//     console.log(err);
// }
//*********************************************************************** */

const input = document.getElementById('find-movie');
const btn = document.getElementById('fetch-btn');
const clear = document.getElementById('clear-btn');
const table = document.getElementById('table');
const tableBody = document.querySelector('table tbody');


btn.addEventListener('click', fetchData);
clear.addEventListener('click', clearData);

input.addEventListener('input', e => {
    const value = e.target.value
    console.log(value);
})

async function fetchData() {
    try {
        const response = await fetch('http://www.omdbapi.com/?apikey=c8b2cdc0&s=' + input.value);
        const data = await response.json();

        let foundMovies = data.Search;
        console.log(foundMovies);
        
        let displayMovie = "";
        for (let movie of foundMovies) {
            displayMovie += `
            <tr>
                <td>${movie.Title}</td>
                <td>${movie.Year}</td>
                <td><img src=${movie.Poster}></td>
            </tr>
            `
        }

        tableBody.innerHTML = displayMovie;
    } catch (error) {
        console.log(error)
    }
}



function clearData(){
    tableBody.innerHTML = "";
}


fetchData();
clearData();
