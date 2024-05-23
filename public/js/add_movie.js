/* 
Patrick Lim and Tavner Murphy 2024
*/

// Get the objects we need to modify
let addMovieForm = document.getElementById('add-movie-form-ajax');

// Modify the objects we need
addMovieForm.addEventListener("submit", function (e) {
    
    // Prevent the form from submitting
    e.preventDefault();

    // Get form fields we need to get data from
    let inputMovieLength = document.getElementById("movie_title");
    let inputMovieTitle = document.getElementById("movie_length");
    let inputMovieTotalView = document.getElementById("movie_total_view");

    // Get the values from the form fields
    let movietitleValue = inputMovieTitle.value;
    let movielengthValue = inputMovieLength.value;
    let movietotalviewValue = inputMovieTotalView.value;

    // Put our data we want to send in a javascript object
    let data = {
        movie_length: movielengthValue,
        movie_title: movietitleValue,
        movie_total_view: movietotalviewValue,
    };
    
    // Setup our AJAX request
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/add-movie-ajax", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    // Tell our AJAX request how to resolve
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {

            // Add the new data to the table
            addRowToTable(xhttp.response);

            // Clear the input fields for another transaction
            inputMovieLength.value = '';
            inputMovieTitle.value = '';
            inputMovieTotalView.value = '';
        }
        else if (xhttp.readyState == 4 && xhttp.status != 200) {
            console.log("There was an error with the input.")
        }
    }

    // Send the request and wait for the response
    xhttp.send(JSON.stringify(data));

})

// Creates a single row from an Object representing a single record from 
// Movies
addRowToTable = (data) => {

    // Get a reference to the current table on the page and clear it out.
    let currentTable = document.getElementById("movies-table");

    // Get the location where we should insert the new row (end of table)
    let newRowIndex = currentTable.rows.length;

    // Get a reference to the new row from the database query (last object)
    let parsedData = JSON.parse(data);
    let newRow = parsedData[parsedData.length - 1]

    // Create a row and 4 cells
    let row = document.createElement("TR");
    let movietitleCell = document.createElement("TD");
    let movielengthCell = document.createElement("TD");
    let movietotalviewCell = document.createElement("TD");

    // Fill the cells with correct data
    movielengthCell.innerText = newRow.movie_length;
    movietitleCell.innerText = newRow.movie_title;
    movietotalviewCell.innerText = newRow.movie_total_view;

    // Add the cells to the row 
    row.appendChild(movielengthCell);
    row.appendChild(movietitleCell);
    row.appendChild(movietotalviewCell);
    
    // Add the row to the table
    currentTable.appendChild(row);
}