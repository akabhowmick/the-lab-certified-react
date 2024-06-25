import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface UserProfileProps {}

export const Profile: React.FC<UserProfileProps> = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
  }, [navigate]);

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatarUrl: "https://via.placeholder.com/150", // Placeholder image URL
  };

  const { name, email, avatarUrl } = user;

  return (
    <div style={styles.container}>
      <div style={styles.profileCard}>
        <img src={avatarUrl} alt="User Avatar" style={styles.avatar} />
        <h1 style={styles.name}>{name}</h1>
        <p style={styles.email}>{email}</p>
      </div>
    </div>
  );
};

// Define styles as an object
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
    fontFamily: "Arial, sans-serif",
  },
  profileCard: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    maxWidth: "400px",
    width: "100%",
  },
  avatar: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "20px",
  },
  name: {
    fontSize: "24px",
    margin: "10px 0",
  },
  email: {
    fontSize: "18px",
    color: "#888",
    margin: "10px 0",
  },
} as const;
