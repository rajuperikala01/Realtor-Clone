import React from "react";
import { FcGoogle } from "react-icons/fc";
function OAuth() {
  return (
    <button
      className="
    flex text-center
     m-auto items-center
     gap-3 bg-red-700
     p-auto w-full
     justify-center
     pt-3 pb-3
     rounded-sm
     font-medium uppercase
    text-white
     text-sm
     hover:bg-red-800
     active:bg-red-900
     shadow-md
     hover:shadow-lg
     active:shadow-lg
     transition duration-150
     ease-in-out"
    >
      <FcGoogle
        className="bg-white
        text-2xl 
        rounded-2xl"
      />
      Continue with Google
    </button>
  );
}

export default OAuth;
