import { React } from 'react';
import { Link } from 'react-router-dom';

function Users() {
    return(
        <>
            <h2>Users</h2>
            <article>
                <table id="episode">
                    <thead>
                        <tr>
                            <th>user_id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Jason Williams</td>
                            <td>jwill@gmail.com</td>
                            <td>United States</td>
                            <td>
                                <button type="submit" onClick= "return deleteUsers();">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
            </article>
            <Link to="/users_new">Add New User</Link>
        </>
    )
}
export default Users;