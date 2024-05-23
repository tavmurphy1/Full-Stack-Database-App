import { React } from 'react';
import { Link } from 'react-router-dom';

function Televisions() {
    return(
        <>
            <h2>Televisions</h2>
            <article>
                <table id="television">
                    <thead>
                        <tr>
                            <th>television_id</th>
                            <th>TV Show</th>
                            <th>Total Views</th>
                            <th>genre(s)</th>
                            <th>actor(s)</th>
                            <th>director(s)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Planet Earth II</td>
                            <td>0</td>
                            <td>
                                documentary
                            </td>
                            <td>David Attenborough</td>
                            <td>Justin Anderson</td>
                            <td>
                                <button type="submit" onClick= "return deleteTelevision();">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
            </article>
            <Link to="/televisions_new">Add New TV Show</Link>

        </>
    )
}
export default Televisions;