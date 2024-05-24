import { React } from 'react';

function MoviesDirectors() {
    return(
        <>
            <h2>Movie Directors</h2>
            <article>
                <table id="movies_directors">
                    <thead>
                        <tr>
                            <th>movie_director_id</th>
                            <th>director</th>
                            <th>movie</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Francis Ford Coppola</td>
                            <td>The Godfather</td>
                        </tr>
                    </tbody>
                </table>
                
            </article>

        </>
    )
}
export default MoviesDirectors;