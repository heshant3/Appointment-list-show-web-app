// Preloader.js
import React from "react";
import Lottie from "lottie-react";
import animationData from "./logoAnimation.json"; // Replace with the actual path

const Preloader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100dvh", // Use 100vh to cover the full height of the viewport
      }}
    >
      {/* Use Lottie animation */}
      <Lottie
        animationData={animationData}
        loop
        autoPlay
        style={{ width: "300px", height: "300px" }}
      />

      {/* Use Loader component */}
      {/* Uncomment and customize as needed */}
      {/* <Loader type="TailSpin" color="#00BFFF" height={80} width={80} /> */}
    </div>
  );
};

export default Preloader;
