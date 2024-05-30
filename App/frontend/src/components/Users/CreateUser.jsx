import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateUser() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_country: "",
  });

  const handleSubmit = async (e) => {
    // Prevent page reload
    e.preventDefault();

    // Create a new episode object from the formData
    const newUser = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      user_country: formData.user_country
    };

    try {
      const URL = import.meta.env.VITE_API_URL + "users";
      const response = await axios.post(URL, newUser);
      if (response.status === 201) {
        alert("User was created");
        navigate("/users");
      } else {
        alert("Error creating user");
      }
    } catch (error) {
      alert("Error creating user");
      console.error("Error creating user:", error);
    }

    // Reset the form fields
    resetFormFields();
  };

  const resetFormFields = () => {
    setFormData({
      user_name: "",
      user_email: "",
      user_country: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
      <>Who are you adding?</>
      <br></br>
      <br></br>
        <label htmlFor="user_name">Name</label>
        <input
          type="text"
          name="user_name"
          defaultValue={formData.user_name}
          onChange={handleInputChange}
        />
        <label htmlFor="user_email">Email</label>
        <input
          type="text"
          name="user_email"
          defaultValue={formData.user_email}
          onChange={handleInputChange}
        />
        <label htmlFor="user_country">Country</label>
        <input
          type="text"
          name="user_country"
          defaultValue={formData.user_country}
          onChange={handleInputChange}
        />

        <button type="submit">Create User</button>
      </form>

      <br></br>

    </>
  );
}

export default CreateUser;
