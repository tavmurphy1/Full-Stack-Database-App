import { React } from 'react';

const addEngagement = async () => {

    await alert(`Engagement was successfully added.`);
    location.href="/Engagements"
    }

function NewEngagement() {
    return(
        <>

        <h2>New Engagement</h2>
            <article>
                <table id="addEngagement">
                    <caption>Record a User Engagement Below</caption>
                    <thead>
                        <tr>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <label for="favorite">Favorited?</label>
                                <input
                                    name="favorite"
                                    type="checkbox"
                                    value="1"/>
                        </td>
                        <td>
                            <label for="rating" >Rating</label>
                            <select
                                name="rating"
                                required>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </td>
                        <td>
                            <label for="View">View?</label>
                                <input
                                    name="View"
                                    type = "checkbox"
                                    value="1"/>
                        </td>
                        <td>
                            <label for="user_id" >User_ID</label>
                            <select
                                name="user_id"
                                required>
                                <option value="0">&nbsp;</option>
                                <option value="1">Jason Williams</option>
                            </select>
                        </td>
                        <td>

                            <label for="movie_id">Movie</label>
                            <select
                                name="movie_id"
                                required>
                                <option value="0">&nbsp;</option>
                                <option value="1">The Godfather</option>
                            </select>
                            
                        </td>
                        <td>
                            <label for="television_id">TV Show</label>
                            <select
                                name="television"
                                required>
                                <option value="0">&nbsp;</option>
                                <option value="1">Planet Earth II</option>
                            </select>
                        </td>
                        <td>
                        <label for="submit"></label>
                            <button
                                type="submit"
                                onClick={addEngagement}
                                id="submit"
                            >Add</button>
                        </td>
                    
                    </tr>
                    </tbody>
                </table>
                
            </article>
        </>
    )
}
export default NewEngagement;