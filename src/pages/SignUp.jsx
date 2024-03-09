import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "./components/OAuth";
import {getAuth,updateProfile, createUserWithEmailAndPassword} from "firebase/auth"
import { db } from "../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignUp() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setshowpassword] = useState(false);
  const { name,email, password } = formData;
  const navigate = useNavigate();

  function onChange(e) {
    setformData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredentials = await createUserWithEmailAndPassword(auth,email,password);
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      const user = userCredentials.user;
      const formDataCopy = {...formData};
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, "users", user.uid), formDataCopy)
      navigate("/")
    } catch (error) {
      toast.error("something went Wrong... try again")
    }
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold ">SignIn</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] md:mb-6  mb-12">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2V5fGVufDB8fDB8fHww"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
          <input
              type="name"
              onChange={onChange}
              value={name}
              id="name"
              placeholder="Full Name"
              className="w-full 
              mb-6
              px-4 py-2 text-l
               text-gray-700
                bg-white
                border-gray-300 rounded
                transition ease-in-out
                "
            />
            <input
              type="email"
              onChange={onChange}
              value={email}
              id="email"
              placeholder="Email"
              className="w-full 
              mb-6
              px-4 py-2 text-l
               text-gray-700
                bg-white
                border-gray-300 rounded
                transition ease-in-out
                "
            />
            <div className="relative mb-6">
              <input
                type={`${showPassword ? "text" : "password"}`}
                onChange={onChange}
                placeholder="Password"
                id="password"
                value={password}
                className="w-full 
                  px-4 py-2 text-l
                text-gray-700
                bg-white
                border-gray-300 rounded
                  transition ease-in-out"
              />
              {showPassword ? (
                <AiFillEye
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setshowpassword(!showPassword)}
                />
              ) : (
                <AiFillEyeInvisible
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setshowpassword(!showPassword)}
                />
              )}
            </div>
            <div className="flex justify-between text-sm sm:text-lg whitespace-nowrap">
              <p className="mb-6">
                Don't have a account?
                <Link
                  to="/sign-in"
                  className="text-red-600 transition duration-200 ease-in-out ml-1 hover:text-red-700"
                >
                  Sign In
                </Link>
              </p>
              <p>
                <Link
                  to="/forgot-password"
                  className="text-blue-600 transition duration-200 ease-in-out ml-1 hover:text-blue-700"
                >
                  Forgot Password?
                </Link>
              </p>
            </div>
            <button
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transitiondura
            -150 ease-in-out hover:shadow-lg active:bg-blue-800"
              type="submit"
            >
              SignUp
            </button>
            <div className=" flex my-4 before:border-t before:flex-1 items-center before:border-gray-300 after:border-t  after:flex-1 after:border-gray-300">
              <p className="text-center 
              font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignUp;

