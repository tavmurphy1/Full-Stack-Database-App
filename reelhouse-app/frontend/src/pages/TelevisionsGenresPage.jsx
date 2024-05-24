import { React } from 'react';

function TelevisionsGenres() {
    return(
        <>
            <h2>Television Genres</h2>
            <article>
                <table id="televisions_genres">
                    <thead>
                        <tr>
                            <th>television_genre_id</th>
                            <th>genre</th>
                            <th>television</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>documentary</td>
                            <td>Planet Earth II</td>
                        </tr>
                    </tbody>
                </table>
                
            </article>

        </>
    )
}
export default TelevisionsGenres;