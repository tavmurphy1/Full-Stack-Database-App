import { React } from 'react';

const addGenre = async () => {

    await alert(`Genre was successfully added.`);
    location.href="/genres"
    }

function NewGenres() {
    return(
        <>

<h2>New Genres</h2>
            <article>
                <table id="addGenre">
                    <caption>What genre are you adding?</caption>
                    <thead>
                        <tr>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><label for="name" >Genre</label>
                            <input
                                type="text"
                                placeholder="genre_name"
                                required
                                 
                                id="name" />
                        </td>
    
                        <td>
                        <label for="submit"></label>
                            <button
                                type="submit"
                                onClick={addGenre}
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
export default NewGenres;