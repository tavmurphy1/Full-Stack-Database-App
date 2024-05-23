import { React } from 'react';
import { Link } from 'react-router-dom';

function Directors() {
    return(
        <>
            <h2>Directors</h2>
            <article>
                <table id="directors">
                    <thead>
                        <tr>
                            <th>director_id</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Francis Ford Coppola</td>
                            <td>
                                <button type="submit" onClick= "return deleteDirector();">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Quentin Tarantino</td>
                            <td>
                                <button type="submit" onClick= "return deleteDirector();">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>John Lasseter</td>
                            <td>
                                <button type="submit" onClick= "return deleteDirector();">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Lana Wachowski</td>
                            <td>
                                <button type="submit" onClick= "return deleteDirector();">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Justin Anderson</td>
                            <td>
                                <button type="submit" onClick= "return deleteDirector();">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
            <Link to="/directors_new">Add New Director</Link>

        </>
    )
}
export default Directors;