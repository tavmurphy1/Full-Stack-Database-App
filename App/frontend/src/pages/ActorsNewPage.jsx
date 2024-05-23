import { React } from 'react';

const addActor = async () => {

    await alert(`Actor was successfully added.`);
    location.href="/actors"
    }

function NewActor() {
    return(
        <>

            <h2>New Actors</h2>
            <article>
                <table id="addActor">
                    <caption>Which actor are you adding?</caption>
                    <thead>
                        <tr>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><label for="name" >Name</label>
                            <input
                                type="text"
                                placeholder="actor_name"
                                required
                                 
                                id="name" />
                        </td>
    
                        <td>
                        <label for="submit"></label>
                            <button
                                type="submit"
                                onClick={addActor}
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
export default NewActor;