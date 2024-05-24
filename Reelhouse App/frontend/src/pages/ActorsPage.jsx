import { React } from 'react';
import { Link } from 'react-router-dom';

function Actors() {
    return(
        <>
            <h2>Actors</h2>
            <article>
                <table id="actors">
                    <thead>
                        <tr>
                            <th>actor_id</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>David Attenborough</td>
                            <td>
                                <button type="submit" onClick= "return deleteActor();">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Ron Livingston</td>
                            <td>
                                <button type="submit" onClick= "return deleteActor();">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Emily Watson</td>
                            <td>
                                <button type="submit" onClick= "return deleteActor();">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Michael Watson</td>
                            <td>
                                <button type="submit" onClick= "return deleteActor();">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Ella Purnell</td>
                            <td>
                                <button type="submit" onClick= "return deleteActor();">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Al Pacino</td>
                            <td>
                                <button type="submit" onClick= "return deleteActor();">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
            </article>
            <Link to="/actors_new">Add New Actor</Link>

        </>
    )
}
export default Actors;