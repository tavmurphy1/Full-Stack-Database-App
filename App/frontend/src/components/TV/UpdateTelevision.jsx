import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

const UpdateTelevision = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const prevTelevision = location.state.television;

  const [formData, setFormData] = useState({
    television_title: prevTelevision.television_title || '',
    television_total_view: prevTelevision.television_total_view || ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  function isUpdate(){
    // Check if formData is equal to prevTelevision
    if (JSON.stringify(formData) === JSON.stringify({
      television_title: prevTelevision.television_title || '',
      television_total_view: prevTelevision.television_total_view || ''
    })) {
      alert("No changes made.");
      return false;
    }
    return true
  }

  const handleSubmit = async (event) => {
    // Stop default form behavior which is to reload the page
    event.preventDefault();
    // Check if formData is equal to prevMovie
    if (isUpdate()){
      try {
        const URL = import.meta.env.VITE_API_URL + "televisions/" + id;
        const response = await axios.put(URL, formData);
        if (response.status !== 200) {
          alert("Error updating TV show");
        } else {
          alert(response.data.message);
          // Redirect to televisions page
          navigate("/televisions");
        }
      } catch (err) {
        console.log("Error updating TV show:", err);
      }
    }
  };

  return (
    <div>
      <h2>Update TV show</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="television_title"
            onChange={handleInputChange}
            required
            defaultValue={prevTelevision.television_title}
          />
        </div>
        <div>
          <label>Total Views:</label>
          <input
            type="number"
            name="television_total_view"
            onChange={handleInputChange}
            required
            defaultValue={prevTelevision.television_total_view}
          />
        </div>
        <button type="button" onClick={() => navigate("/televisions")}>
          Cancel
        </button>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateTelevision;

