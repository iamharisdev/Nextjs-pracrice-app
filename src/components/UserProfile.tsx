import React, { useState } from "react";

interface UserProfileProps {
  onImageUpload: (file: File | null) => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ onImageUpload }) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      setPreview(URL.createObjectURL(file));
      onImageUpload(file);
    }
  };

  return (
    <div style={{ textAlign: "center", marginBottom: "1rem" }}>
      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          src={preview || "https://via.placeholder.com/150"}
          alt="Profile Preview"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            border: "2px solid #ccc",
          }}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 0,
            width: "150px",
            height: "150px",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default UserProfile;
