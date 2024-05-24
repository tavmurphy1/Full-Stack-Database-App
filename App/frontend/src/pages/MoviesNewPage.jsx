import { React } from 'react';

const addMovie = async () => {

    await alert(`Movie was successfully added.`);
    location.href="/movies"
    }

function NewMovie() {
    return(
        <>

<h2>New Movies</h2>
            <article>
                <table id="addMovie">
                    <caption>Which Movie are you adding?</caption>
                    <thead>
                        <tr>
                            
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><label for="title" >Movie</label>
                            <input
                                type="text"
                                placeholder="title"
                                required
                                 
                                id="title" />
                        </td>
                    </tr>
                    <tr>
                        <td><label for="length" >Length</label>
                            <input
                                type="text"
                                placeholder="length"
                                required
                                 
                                id="length" />
                        </td>
                    </tr>
                    <tr>
                        <td><label>genre(s)</label>
                            <form required>
                                <input type ="checkbox" name="genre1" value="1"/>
                                    <label for="genre1">action</label>
                                <input type ="checkbox" name="genre2" value="2"/>
                                    <label for="genre2">documentary</label>
                                <input type ="checkbox" name="genre3" value="3"/>
                                    <label for="genre3">drama</label>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td><label>actor(s)</label>
                            <form required>
                                <input type ="checkbox" name="actor1" value="1"/>
                                    <label for="actor1">David Attenborough</label>
                                <input type ="checkbox" name="actor2" value="2"/>
                                    <label for="actor2">Ron Livingston</label>
                                <input type ="checkbox" name="actor3" value="3"/>
                                    <label for="actor3">Emily Watson</label>
                                <input type ="checkbox" name="actor4" value="3"/>
                                    <label for="actor4">Michael Watson</label>
                                <input type ="checkbox" name="actor5" value="3"/>
                                    <label for="actor5">Ella Purnell</label>
                                <input type ="checkbox" name="actor6" value="3"/>
                                    <label for="actor6">Al Pacino</label>
                            </form>
                        </td>
                    </tr>
                <tr>
                    <td><label>director(s)</label>
                        <form required>
                            <input type ="checkbox" name="director1" value="1"/>
                                <label for="director1">Francis Ford Coppola</label>
                            <input type ="checkbox" name="director2" value="2"/>
                                <label for="director2">Quentin Tarantino</label>
                            <input type ="checkbox" name="director3" value="3"/>
                                <label for="director3">John Lasseter</label>
                            <input type ="checkbox" name="director4" value="3"/>
                                <label for="director4">Lana Wachowski</label>
                            <input type ="checkbox" name="director5" value="3"/>
                                <label for="director5">Justin Anderson</label>
                        </form>
                    </td>
                </tr>
                    </tbody>
                </table>

                <label for="submit"></label>
                    <button
                        type="submit"
                        onClick={addMovie}
                        id="submit"
                    >Add</button>
                
            </article>
        </>
    )
}
export default NewMovie;