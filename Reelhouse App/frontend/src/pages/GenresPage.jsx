import { React } from 'react';
import { Link } from 'react-router-dom';

function Genres() {
    return(
        <>
            <h2>Genres</h2>
            <article>
                <table id="genres">
                    <thead>
                        <tr>
                            <th>genre_id</th>
                            <th>Genre</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>action</td>
                            <td>
                                <button type="submit" onClick= "return deleteGenre();">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>documentary</td>
                            <td>
                                <button type="submit" onClick= "return deleteGenre();">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>drama</td>
                            <td>
                                <button type="submit" onClick= "return deleteGenre();">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>animation</td>
                            <td>
                                <button type="submit" onClick= "return deleteGenre();">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>crime</td>
                            <td>
                                <button type="submit" onClick= "return deleteGenre();">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
            <Link to="/genres_new">Add New Genre</Link>

        </>
    )
}
export default Genres;