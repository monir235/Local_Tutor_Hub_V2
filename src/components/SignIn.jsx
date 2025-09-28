import React, { useState } from "react";
import axios from "axios";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

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
      const response = await axios.post("http://localhost/prof.php", {
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
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        minHeight: "100vh",
        margin: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Glassmorphism Card */}
      <div
        style={{
          width: "400px",
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(12px)",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          color: "#fff",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Create Account
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "6px" }}>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "10px",
                outline: "none",
                background: "rgba(255, 255, 255, 0.25)",
                color: "#fff",
                transition: "0.3s",
              }}
              onFocus={(e) =>
                (e.target.style.background = "rgba(255, 255, 255, 0.4)")
              }
              onBlur={(e) =>
                (e.target.style.background = "rgba(255, 255, 255, 0.25)")
              }
              required
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "6px" }}>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "10px",
                outline: "none",
                background: "rgba(255, 255, 255, 0.25)",
                color: "#fff",
                transition: "0.3s",
              }}
              onFocus={(e) =>
                (e.target.style.background = "rgba(255, 255, 255, 0.4)")
              }
              onBlur={(e) =>
                (e.target.style.background = "rgba(255, 255, 255, 0.25)")
              }
              required
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "6px" }}>
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "10px",
                outline: "none",
                background: "rgba(255, 255, 255, 0.25)",
                color: "#fff",
                transition: "0.3s",
              }}
              onFocus={(e) =>
                (e.target.style.background = "rgba(255, 255, 255, 0.4)")
              }
              onBlur={(e) =>
                (e.target.style.background = "rgba(255, 255, 255, 0.25)")
              }
              required
            />
          </div>

          {/* Retype Password */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "6px" }}>
              Retype Password
            </label>
            <input
              type="password"
              placeholder="Retype password"
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "10px",
                outline: "none",
                background: "rgba(255, 255, 255, 0.25)",
                color: "#fff",
                transition: "0.3s",
              }}
              onFocus={(e) =>
                (e.target.style.background = "rgba(255, 255, 255, 0.4)")
              }
              onBlur={(e) =>
                (e.target.style.background = "rgba(255, 255, 255, 0.25)")
              }
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            style={{
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
            }}
            onMouseEnter={(e) =>
              (e.target.style.background = "linear-gradient(135deg, #2575fc, #6a11cb)")
            }
            onMouseLeave={(e) =>
              (e.target.style.background = "linear-gradient(135deg, #6a11cb, #2575fc)")
            }
          >
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
              color: registrationMessage.includes("successful")
                ? "lightgreen"
                : "#ff6b6b",
            }}
          >
            {registrationMessage}
          </p>
        )}
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "30px",
          background: "rgba(255, 255, 255, 0.2)",
          padding: "12px 30px",
          borderRadius: "12px",
          display: "flex",
          gap: "20px",
          boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
        }}
      >
        <FaFacebook style={{ color: "#fff", fontSize: "22px", cursor: "pointer" }} />
        <FaTwitter style={{ color: "#fff", fontSize: "22px", cursor: "pointer" }} />
        <FaInstagram style={{ color: "#fff", fontSize: "22px", cursor: "pointer" }} />
      </footer>
    </div>
  );
};

export default SignInWithEmail;
