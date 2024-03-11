import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "./components/OAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
function SignIn() {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowpassword] = useState(false);
  const { email, password } = formData;
  const navigate = useNavigate();
  function onChangeEmail(e) {
    setformData((prevState) => ({
      ...prevState,
      email: e.target.value,
    }));
  }

  function onChangePass(e) {
    setformData((prevState) => ({
      ...prevState,
      password: e.target.value,
    }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        navigate("/");
      }
    } catch (error) {
      toast.error("Bad user credentials");
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
          <form onSubmit={(e) => onSubmit(e)}>
            <input
              required
              type="email"
              onChange={onChangeEmail}
              value={email}
              id="email"
              placeholder="Email"
              className="w-full 
              mb-6 px-4 py-2 text-l
               text-gray-700
                bg-white
                border-gray-300 rounded
                transition ease-in-out
                "
            />
            <div className="relative mb-6">
              <input
                required
                type={`${showPassword ? "text" : "password"}`}
                onChange={onChangePass}
                placeholder="Password"
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
                  onClick={() => setShowpassword(!showPassword)}
                />
              ) : (
                <AiFillEyeInvisible
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowpassword(!showPassword)}
                />
              )}
            </div>
            <div className="flex justify-between text-sm sm:text-lg whitespace-nowrap">
              <p className="mb-6">
                Don't have a account?
                <Link
                  to="/sign-up"
                  className="text-red-600 transition duration-200 ease-in-out ml-1 hover:text-red-700"
                >
                  Register
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
              SignIn
            </button>
            <div className=" flex my-4 before:border-t before:flex-1 items-center before:border-gray-300 after:border-t  after:flex-1 after:border-gray-300">
              <p
                className="text-center 
              font-semibold mx-4"
              >
                OR
              </p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
