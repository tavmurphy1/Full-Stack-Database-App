import { React } from 'react';
import { Link } from 'react-router-dom';

function Engagements() {
    return(
        <>
            <h2>Engagements</h2>
            <article>
                <table id="engagements">
                    <thead>
                        <tr>
                            <th>engagement_id</th>
                            <th>favorited</th>
                            <th>rating</th>
                            <th>view</th>
                            <th>user_id</th>
                            <th>Movie</th>
                            <th>TV Show</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>0</td>
                            <td>8</td>
                            <td>1</td>
                            <td>1</td>
                            <td>The Godfather</td>
                            <td>NULL</td>
                            <td>
                                <button type="submit" onClick= "return updateEngagement();">Edit</button>
                            </td>
                            <td>
                                <button type="submit" onClick= "return deleteEngagement();">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
            <Link to="/engagements_new">Add New Engagement</Link>
        </>
    )
}
export default Engagements;