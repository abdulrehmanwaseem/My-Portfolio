import React from "react";

const DynamicImageResponse = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0f0f0f",
        color: "#e5e5e5",
        padding: "40px",
        fontFamily: "sans-serif", // Use system font instead of custom font
      }}
    >
      <div
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "#14213d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "30px",
          border: "3px solid #fca311",
        }}
      >
        <div style={{ fontSize: "36px", color: "#fca311" }}>AR</div>
      </div>
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          color: "#fca311",
          margin: "0 0 8px 0",
          textAlign: "center",
        }}
      >
        Abdul Rehman Waseem
      </h1>
      <h2
        style={{
          fontSize: "32px",
          margin: "0 0 16px 0",
          fontWeight: "normal",
          color: "#e5e5e5",
          textAlign: "center",
        }}
      >
        Full Stack Developer
      </h2>
      <div
        style={{
          display: "flex",
          gap: "12px",
          fontSize: "20px",
          color: "#a8a8a8",
        }}
      >
        <span style={{ color: "#4895ef", fontWeight: "bold" }}>MERN</span>
        <span>•</span>
        <span style={{ color: "#4cc9f0", fontWeight: "bold" }}>Next.js</span>
        <span>•</span>
        <span style={{ color: "#f77f00", fontWeight: "bold" }}>NestJS</span>
        <span>•</span>
        <span style={{ color: "#d62828", fontWeight: "bold" }}>ThreeJs</span>
        <span>•</span>
        <span style={{ color: "#497E76", fontWeight: "bold" }}>Electron</span>
        <span>•</span>
        <span style={{ color: "#C7B446", fontWeight: "bold" }}>
          React Native
        </span>
      </div>
    </div>
  );
};

export default DynamicImageResponse;
