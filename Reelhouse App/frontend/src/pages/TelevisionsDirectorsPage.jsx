import { React } from 'react';

function TelevisionsDirectors() {
    return(
        <>
            <h2>Television Directors</h2>
            <article>
                <table id="televisions_directors">
                    <thead>
                        <tr>
                            <th>television_actor_id</th>
                            <th>director</th>
                            <th>television</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Justin Anderson</td>
                            <td>Planet Earth II</td>
                        </tr>
                    </tbody>
                </table>
                
            </article>

        </>
    )
}
export default TelevisionsDirectors;