import { React } from 'react';

const addUser = async () => {

    await alert(`User was successfully added.`);
    location.href="/users"
    }

function NewUser() {
    return(
        <>

        <h2>New User</h2>
            <article>
                <table id="addEpisode">
                    <caption>Who are you adding?</caption>
                    <thead>
                        <tr>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><label for="name" >Name</label>
                            <input
                                type="text"
                                placeholder="name"
                                required
                                 
                                id="name" />
                        </td>
                    </tr>
                    <tr>
                        <td><label for="email" >Email</label>
                            <input
                                type="text"
                                placeholder="email"
                                required
                                 
                                id="email" />
                        </td>
                    </tr>
                    <tr>
                        <td><label for="country" >Country</label>
                            <input
                                type="text"
                                placeholder="country"
                                required
                             
                                id="country" />
                        </td>
                    </tr>
                    </tbody>
                </table>

                <label for="submit"></label>
                <button
                    type="submit"
                    onClick={addUser}
                    id="submit"
                >Add</button>

            </article>
        </>
    )
}
export default NewUser;