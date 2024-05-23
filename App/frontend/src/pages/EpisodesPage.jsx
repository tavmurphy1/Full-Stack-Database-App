import { React } from 'react';
import { Link } from 'react-router-dom';

function Episodes() {
    return(
        <>
            <h2>Episodes</h2>
            <article>
                <table id="episode">
                    <thead>
                        <tr>
                            <th>episode_id</th>
                            <th>Episode</th>
                            <th>Length</th>
                            <th>TV Show</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Islands</td>
                            <td>51</td>
                            <td>Planet Earth II</td>
                            <td>
                                <button type="submit" onClick= "return deleteEpisode();">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
            </article>
            <Link to="/episodes_new">Add New Episode</Link>

        </>
    )
}
export default Episodes;