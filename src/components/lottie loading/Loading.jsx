import React from "react";
import Lottie from "react-lottie-player";
import bookLoading from "../../assets/lottie/45130-book.json";

const Loading = () => {
  return (
    <>
      <Lottie
        loop
        animationData={bookLoading}
        play
        style={{ width: 200, height: 200 }}
      />
    </>
  );
};

export default Loading;
