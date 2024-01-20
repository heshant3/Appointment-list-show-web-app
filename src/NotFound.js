// NotFound.js
import React from "react";
import Lottie from "lottie-react";
import animationData from "./404Error.json";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Use 100vh to cover the full height of the viewport
      }}
    >
      {/* Use Lottie animation */}
      <Lottie
        animationData={animationData}
        loop
        autoPlay
        style={{ width: "600px", height: "600px" }}
      />

      {/* Use Loader component */}
      {/* Uncomment and customize as needed */}
      {/* <Loader type="TailSpin" color="#00BFFF" height={80} width={80} /> */}
    </div>
  );
};

export default NotFound;
