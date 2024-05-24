import { React } from 'react';

const addDirector = async () => {

    await alert(`Director was successfully added.`);
    location.href="/Directors"
    }

function NewDirector() {
    return(
        <>

            <h2>New Directors</h2>
            <article>
                <table id="addDirector">
                    <caption>Which director are you adding?</caption>
                    <thead>
                        <tr>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><label for="name" >Name</label>
                            <input
                                type="text"
                                placeholder="director_name"
                                required
                                 
                                id="name" />
                        </td>
    
                        <td>
                        <label for="submit"></label>
                            <button
                                type="submit"
                                onClick={addDirector}
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
export default NewDirector;