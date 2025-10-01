import React, { useState } from "react";
import axios from "axios";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaUniversity } from 'react-icons/fa';


const SignInWithEmail = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [registrationMessage, setRegistrationMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== retypePassword) {
      setRegistrationMessage("❌ Passwords do not match.");
      return;
    }
    try {
      const response = await axios.post("https://sirajummonir.wuaze.com/prof.php", {
        name,
        email,
        password,
        retypePassword,
      });
      console.log(response.data);
      setRegistrationMessage("✅ Registration successful!");
      setName("");
      setEmail("");
      setPassword("");
      setRetypePassword("");
    } catch (error) {
      console.error(error);
      setRegistrationMessage("❌ Registration failed. Try again.");
    }
  };

  

  return (
    <div style={styles.pageBackground}>
      {/* Glassmorphism Card */}
      <div style={styles.card}>
        <h2 style={styles.header}>Create Account</h2>

        <form onSubmit={handleSubmit}>
          {["Name", "Email", "Password", "Retype Password"].map((label, idx) => {
            const type = label.toLowerCase().includes("password") ? "password" : label.toLowerCase() === "email" ? "email" : "text";
            const value = idx === 0 ? name : idx === 1 ? email : idx === 2 ? password : retypePassword;
            const setter = idx === 0 ? setName : idx === 1 ? setEmail : idx === 2 ? setPassword : setRetypePassword;

            return (
              <div key={idx} style={{ marginBottom: "15px" }}>
                <label style={styles.label}>{label}</label>
                <input
                  type={type}
                  placeholder={`Enter ${label.toLowerCase()}`}
                  value={value}
                  onChange={(e) => setter(e.target.value)}
                  style={styles.input}
                  required
                />
              </div>
            );
          })}

          {/* Register Button */}
          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>

        {/* Message */}
        {registrationMessage && (
          <p
            style={{
              textAlign: "center",
              marginTop: "15px",
              fontWeight: "bold",
              color: registrationMessage.includes("successful") ? "lightgreen" : "#ff6b6b",
            }}
          >
            {registrationMessage}
          </p>
        )}
      </div>

     {/* Footer */}
<footer style={styles.footer}>
  <a href="https://www.facebook.com/sirajummonir.monir.5" target="_blank" rel="noopener noreferrer">
    <FaFacebook style={styles.icon} />
  </a>
  <a href="https://twitter.com/ayon_chayo33456" target="_blank" rel="noopener noreferrer">
    <FaTwitter style={styles.icon} />
  </a>
  <a href="https://www.instagram.com/monir_chayon/" target="_blank" rel="noopener noreferrer">
    <FaInstagram style={styles.icon} />
  </a>
  <a href="https://github.com/monir235" target="_blank" rel="noopener noreferrer">
    <FaGithub style={styles.icon} />
  </a>
  <a href="https://web.cu.ac.bd/v2/" target="_blank" rel="noopener noreferrer">
    <FaUniversity style={styles.icon} />
  </a>
</footer>
    </div>
  );
};

const styles = {
  pageBackground: {
    fontFamily: "Inter, sans-serif",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    minHeight: "100vh",
    margin: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
  card: {
    width: "100%",
    maxWidth: "400px",
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(12px)",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
    color: "#fff",
    boxSizing: "border-box",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "1.8rem",
  },
  label: {
    display: "block",
    marginBottom: "6px",
    fontSize: "0.9rem",
  },
  input: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    outline: "none",
    background: "rgba(255, 255, 255, 0.25)",
    color: "#fff",
    transition: "0.3s",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
    color: "white",
    padding: "12px",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "0.3s",
  },
  footer: {
    marginTop: "30px",
    display: "flex",
    gap: "20px",
    justifyContent: "center",
  },
  icon: {
    color: "#fff",
    fontSize: "45px",
    cursor: "pointer",
  },
};

export default SignInWithEmail;
