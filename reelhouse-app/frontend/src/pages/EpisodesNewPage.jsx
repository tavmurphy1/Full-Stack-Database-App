import { React } from 'react';

const addEpisode = async () => {

    await alert(`Episode was successfully added.`);
    location.href="/episodes"
    }

function NewEpisode() {
    return(
        <>

<h2>New Episode</h2>
            <article>
                <table id="addEpisode">
                    <caption>Which TV episode are you adding?</caption>
                    <thead>
                        <tr>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><label for="title" >Episode</label>
                            <input
                                type="text"
                                placeholder="title"
                                required
                                 
                                id="title" />
                        </td>
                        <td><label for="length" >Length</label>
                            <input
                                type="text"
                                placeholder="length"
                                required
                                 
                                id="length" />
                        </td>
                        <td><label>TV Show</label>
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
                                onClick={addEpisode}
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
export default NewEpisode;