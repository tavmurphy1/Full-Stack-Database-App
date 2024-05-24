import { React } from 'react';

function MoviesGenres() {
    return(
        <>
            <h2>Movie Genres</h2>
            <article>
                <table id="movies_genres">
                    <thead>
                        <tr>
                            <th>movie_genre_id</th>
                            <th>genre</th>
                            <th>movie</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>drama</td>
                            <td>The Godfather</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>crime</td>
                            <td>The Godfather</td>
                        </tr>
                    </tbody>
                </table>
                
            </article>

        </>
    )
}
export default MoviesGenres;