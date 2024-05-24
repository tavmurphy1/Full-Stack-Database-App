import { React } from 'react';

function MoviesActors() {
    return(
        <>
            <h2>Movie Actors</h2>
            <article>
                <table id="movies_actors">
                    <thead>
                        <tr>
                            <th>movie_actor_id</th>
                            <th>actor</th>
                            <th>movie</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Al Pacino</td>
                            <td>The Godfather</td>
                        </tr>
                    </tbody>
                </table>
                
            </article>

        </>
    )
}
export default MoviesActors;