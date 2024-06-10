//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was completely modified by adding a table that describes what each of our tables/entities do.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

import { React } from 'react';

function HomePage() {
    return(
        <>
            <h2>
                Home
            </h2>
                <article>
                    <p>
                        “Reelhouse” is a subscription-based movie and TV streaming service with 15 million
                        members/users and a rotating, curated catalog of 100 movies. To provide a
                        personalized user experience and to track the popularity of certain films, genres,
                        directors, and actors in its catalog, a website with a DB backend will record its user
                        data, the ‘engagements’ films receive from its users such as views for each film/show, 
                        the ratings users give to each film, as well as the number of times a film was ‘favorited’. 
                        Each movie and show will be associated with at least one genre, director, and actor.
                    </p>
                </article>
            <table id="engagements">
                <thead>
                    <tr>
                        <th>Table</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Engagements</td>
                        <td>This table/entity records information about user engagement such as favorites, ratings, and views.</td>
                    </tr>
                    <tr>
                        <td>Users</td>
                        <td>This table/entity records information about Reelhouse's users.</td>
                    </tr>
                    <tr>
                        <td>Movies</td>
                        <td>This table/entity records information about movies in our catalog.</td>
                    </tr>
                    <tr>
                        <td>Televisions</td>
                        <td>This table/entity records information about TV shows in our catalog.</td>
                    </tr>
                    <tr>
                        <td>Episodes</td>
                        <td>This table/entity records information about TV episodes.</td>
                    </tr>
                    <tr>
                        <td>Genres</td>
                        <td>This table/entity records information about genres for movies and TV shows.</td>
                    </tr>
                    <tr>
                        <td>Actors</td>
                        <td>This table/entity records information about actors for movies and TV shows.</td>
                    </tr>
                    <tr>
                        <td>Directors</td>
                        <td>This table/entity records information about directors for movies and TV shows.</td>
                    </tr>
                    <tr>
                        <td>Movies_Genres</td>
                        <td>This table/entity records information about the M:N relationship between Movies and Genres.</td>
                    </tr>
                    <tr>
                        <td>Movies_Actors</td>
                        <td>This table/entity records information about the M:N relationship between Movies and Actors.</td>
                    </tr>
                    <tr>
                        <td>Movies_Directors</td>
                        <td>This table/entity records information about the M:N relationship between Movies and Directors.</td>
                    </tr>
                    <tr>
                        <td>Televisions_Genres</td>
                        <td>This table/entity records information about the M:N relationship between Televisions and Genres.</td>
                    </tr>
                    <tr>
                        <td>Televisions_Actors</td>
                        <td>This table/entity records information about the M:N relationship between Televisions and Actors.</td>
                    </tr>
                    <tr>
                        <td>Televisions_Directors</td>
                        <td>This table/entity records information about the M:N relationship between Televisions and Directors.</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default HomePage;