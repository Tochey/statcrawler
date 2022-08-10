import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Link } from "react-router-dom";

export default function Register() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8081/api/v1/user/signup";
      const { data: res } = await axios.post(url, data);
      navigate("/dashboard");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="flex justify-between">
      <div className="w-[50%] bg-white">
        <div className="py-4 ">
        <Link to='/'>
          <p className="font-bold text-[26px] px-[40px]">StatCrawler</p>
          </Link>
          <div className="py-[100px] px-[150px]">
            <h2 className="font-semibold text-[30px]">Create account</h2>
            <p className="text-[15px] font-semibold text-[#c9cdd2]">
              create an account to get access to our all exclusive features
            </p>
            <div className="pt-6">
              <form onSubmit={handleSignUpSubmit}>
                <p className="mb-2">firstname</p>
                <input
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  value={data.firstName}
                  required
                  placeholder="input your first name"
                  className="border px-6 py-1 rounded-md border-green-500"
                />
                <p className="mb-2 mt-2">lastname</p>
                <input
                  type="text"
                  required
                  value={data.lastName}
                  onChange={handleChange}
                  name="lastName"
                  placeholder="input your last name"
                  className="border px-6 py-1 rounded-md border-green-500"
                />
                <p className="mb-2 mt-2">email</p>
                <input
                  type="email"
                  value={data.email}
                  required
                  onChange={handleChange}
                  name="email"
                  placeholder="input your email"
                  className="border px-6 py-1 rounded-md border-green-500"
                />
                <p className="mb-2 mt-2">password</p>
                <input
                  type="password"
                  value={data.password}
                  required
                  onChange={handleChange}
                  name="password"
                  placeholder="input your password"
                  className="border px-6 py-1 rounded-md border-green-500"
                />
                {error && <div>{error}</div>}
                <p className="text-[12px] mt-2 font-bold text-green-500">
                  read terms and conditions{" "}
                </p>
                <button
                  type="submit"
                  className="mt-4 text-[15px] font-semibold border rounded-lg px-[100px] text-white py-1 bg-green-500"
                >
                  sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen 2xl:h-screen lg:h-screen w-[50%] bg-[#f3f4f8]">
        <div className="flex justify-center items-center h-full">
          <div className="w-[300px] h-[300px] bg-green-500 rounded-full"></div>
        </div>
        <div className="bg-[#f3f4f8] bg-opacity-25 backdrop-filter backdrop-blur-lg h-[25%] bottom-0 absolute w-[50%] mb-[230px]"></div>
      </div>
    </div>
  );
}