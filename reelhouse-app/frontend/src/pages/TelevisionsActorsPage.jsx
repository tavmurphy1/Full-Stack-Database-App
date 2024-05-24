import { React } from 'react';

function TelevisionsActors() {
    return(
        <>
            <h2>Television Actors</h2>
            <article>
                <table id="televisions_actors">
                    <thead>
                        <tr>
                            <th>television_actor_id</th>
                            <th>actor</th>
                            <th>television</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>David Attenborough</td>
                            <td>Planet Earth II</td>
                        </tr>
                    </tbody>
                </table>
                
            </article>

        </>
    )
}
export default TelevisionsActors;