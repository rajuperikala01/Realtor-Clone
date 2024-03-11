import { getDoc } from "@firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { db } from "../../firebase";
import { doc, setDoc, serverTimestamp } from "@firebase/firestore";
function OAuth() {
  const navigate = useNavigate();
  async function GoogleLogin() {
    
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result =await signInWithPopup(auth,provider);
      const user = result.user;
      // const docRef = doc(db,"user",user.uid);
      // const docSnap = await getDoc(docRef);
      console.log(user);

      // if (!docSnap.exists()) {
      //   await setDoc(docRef, {
      //     name: user.displayName,
      //     email: user.email,
      //     timestamp: serverTimestamp(),
      //   });
      // }

      const docRef = `users/${user.uid}`;
      const userDoc = await getDoc(doc(db, docRef));

      // Check if user document exists
      if (!userDoc.exists()) {
        // Create user document if it doesn't exist
        await setDoc(doc(db, docRef), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      navigate("/")
    } catch (error) {
      toast.error("Cannot Sign In with Google!! Try Later");
      console.log(error);
    }
    navigate("/");
  }

  return (
    <button
    type="button"
    onClick={GoogleLogin}
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
