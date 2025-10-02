import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [file, setFile] = useState(null);

  useEffect(() => {
    axios.get("https://sirajum.alwaysdata.net/localtutorhub/get_Profile.php")
      .then(res => setUserData(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    Object.keys(userData).forEach(key => {
      formData.append(key, userData[key]);
    });
    if (file) {
      formData.append("profilePicture", file);
    }

    try {
      const res = await axios.post("https://sirajum.alwaysdata.net/localtutorhub/updateProfile.php", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      alert(res.data.message);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", padding: "20px", background: "#fff", borderRadius: "10px" }}>
      <h2>Profile</h2>
      <div>
        <img 
          src={userData.image_url ? `http://localhost/${userData.image_url}` : "/default.png"} 
          alt="Profile" 
          style={{ width: "150px", height: "150px", borderRadius: "50%" }}
        />
        <input type="file" onChange={handleFileChange} />
      </div>
      <div>
        <label>Name:</label>
        <input type="text" value={userData.name || ""} onChange={e => handleChange("name", e.target.value)} />
        <label>ID:</label>
        <input type="text" value={userData.student_id || ""} onChange={e => handleChange("student_id", e.target.value)} />
        <label>Location:</label>
        <input type="text" value={userData.location || ""} onChange={e => handleChange("location", e.target.value)} />
        <label>Payment Option:</label>
        <input type="text" value={userData.payment_option || ""} onChange={e => handleChange("payment_option", e.target.value)} />
        <label>Working At:</label>
        <input type="text" value={userData.working_at || ""} onChange={e => handleChange("working_at", e.target.value)} />
        <label>Status:</label>
        <input type="text" value={userData.status || ""} onChange={e => handleChange("status", e.target.value)} />
      </div>
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default Profile;
