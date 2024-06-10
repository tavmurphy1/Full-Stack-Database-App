//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names of table elements to match our project's mySQL Televisions_Genres table.
// No delete or edit functionality.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

/* eslint-disable react/prop-types */
const TGTableRow = ({ televisionsGenres }) => {

  return (
    <tr key={televisionsGenres.television_genre_id}>
      <td>{televisionsGenres.television_genre_id}</td>
      <td>{televisionsGenres.genre}</td>
      <td>{televisionsGenres.television}</td>
    </tr>
  );
};

export default TGTableRow;
