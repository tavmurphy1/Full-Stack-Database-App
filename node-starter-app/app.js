/*
Reelhouse DB
2024 Patrick Lim and Tavner Murphy
/*


/*
    SETUP
*/

var express = require('express');   // We are using the express library for the web server
var app     = express();            // We need to instantiate an express object to interact with the server in our code
PORT        = 3001;                 // Set a port number at the top so it's easy to change in the future

// app.js
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
const { engine } = require('express-handlebars');
var exphbs = require('express-handlebars');     // Import express-handlebars
app.engine('.hbs', engine({extname: ".hbs"}));  // Create an instance of the handlebars engine to process templates
app.set('view engine', '.hbs');                 // Tell express to use the handlebars engine whenever it encounters a *.hbs file.

/*
    ROUTES
*/
// app.js
app.get('/', function(req, res)
{  
    let query1 = "SELECT Movies.movie_id, movie_title, movie_length, sum(Engagements.view) FROM Movies INNER JOIN Engagement ON Engagements.movie_id = Movies.movie_id group by Movies.movie_id Order by Movies.movie_id;";               // Define our query

    db.pool.query(query1, function(error, rows, fields){    // Execute the query

        res.render('index', {data: rows});                  // Render the index.hbs file, and also send the renderer
    })                                                      // an object where 'data' is equal to the 'rows' we
});

app.post('/add-movie-ajax', function(req, res) 
{
    // Capture the incoming data and parse it back to a JS object
    let data = req.body;

    // Capture NULL values
    let movie_id = parseInt(data.movie_id);
    if (isNaN(movie_id))
    {
        movie_id = 'NULL'
    }

    let movie_length = parseInt(data.movie_id);
    if (isNaN(movie_length))
    {
        movie_length = 'NULL'
    }

    let movie_total_view = parseInt(data.movie_total_view);
    if (isNaN(movie_total_view))
    {
        movie_total_view = 'Null'
    }

    // Create the query and run it on the database
    query1 = 'INSERT INTO `Movies` (`movie_title`, `movie_length`) VALUES (:movies_titleInput, :movies_lengthInput);'
    db.pool.query(query1, function(error, rows, fields){

        // Check to see if there was an error
        if (error) {

            // Log the error to the terminal so we know what went wrong, and send the visitor an HTTP response 400 indicating it was a bad request.
            console.log(error)
            res.sendStatus(400);
        }
        else
        {
            // If there was no error, perform a SELECT * on movies
            query2 = 'SELECT Movies.movie_id, movie_title, movie_length, sum(Engagements.view) FROM Movies INNER JOIN Engagements ON Engagements.movie_id = Movies.movie_id group by Movies.movie_id Order by Movies.movie_id;';

            db.pool.query(query2, function(error, rows, fields){

                // If there was an error on the second query, send a 400
                if (error) {
                    
                    // Log the error to the terminal so we know what went wrong, and send the visitor an HTTP response 400 indicating it was a bad request.
                    console.log(error);
                    res.sendStatus(400);
                }
                // If all went well, send the results of the query back.
                else
                {
                    res.send(rows);
                }
            })
        }
    })
});


// received back from the query
/*
    LISTENER
*/
app.listen(PORT, function(){            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});
