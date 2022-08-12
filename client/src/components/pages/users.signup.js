import React, { useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";

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
      navigate("/login");
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
          <Link to="/">
            <p className="font-bold text-[26px] px-[40px]">StatCrawler</p>
          </Link>
          <div className="py-[80px] px-[150px]">
            <h2 className="font-semibold text-[30px]">Create account</h2>
            <p className="text-[15px] font-semibold text-[#51555a]">
              create an account to get access to our all exclusive features
            </p>
            <div className="pt-6">
              <form onSubmit={handleSignUpSubmit}>
                <div className="mb-6">
                  <label
                    for="firstName"
                    className="block mb-2 font-medium text-gray-900"
                  >
                    firstname
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    value={data.firstName}
                    required
                    placeholder="input your first name"
                    className="bg-white border border-green-500 rounded-lg text-sm focus:outline-green-500 focus:border-green-500 block w-full p-2.5"
                  />
                </div>
                <div className="mb-6">
                  <label
                    for="lastName"
                    className="block mb-2 font-medium text-gray-900"
                  >
                    lastname
                  </label>
                  <input
                    type="text"
                    required
                    value={data.lastName}
                    onChange={handleChange}
                    name="lastName"
                    placeholder="input your last name"
                    className="bg-white border border-green-500 rounded-lg text-sm focus:outline-green-500 focus:border-green-500 block w-full p-2.5"
                  />
                </div>
                <div className="mb-6">
                  <label
                    for="email"
                    className="block mb-2 font-medium text-gray-900"
                  >
                    email
                  </label>
                  <input
                    type="email"
                    value={data.email}
                    required
                    onChange={handleChange}
                    name="email"
                    placeholder="input your email"
                    className="bg-white border border-green-500 rounded-lg text-sm focus:outline-green-500 focus:border-green-500 block w-full p-2.5"
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 font-medium text-gray-900"
                  >
                    password
                  </label>
                  <input
                    type="password"
                    value={data.password}
                    required
                    onChange={handleChange}
                    name="password"
                    placeholder="input your password"
                    className="bg-white border border-green-500 rounded-lg text-sm focus:outline-green-500 focus:border-green-500 block w-full p-2.5"
                  />
                </div>
                <div className="mt-1 text-sm">
                  {error && <div>{error}</div>}
                </div>
                <div className="mt-8 flex justify-between">
                  <p className="text-[12px] font-bold text-green-500">
                    by clicking, you agree to terms and conditions{" "}
                  </p>
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-5 h-5 ml-[120px] accent-green-500 bg-white focus:outline-green-500 rounded border focus:border-green-500 focus:ring-3"
                    required=""
                  ></input>
                  <label
                    for="remember"
                    className="ml-2 text-sm font-medium text-green-500"
                  >
                    remind me
                  </label>
                </div>
                <button
                  type="submit"
                  className="text-white mt-4 bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-[225px] py-2.5 text-center"
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
          <div className="w-[200px] h-[200px] bg-green-500 rounded-full"></div>
        </div>
        <div className="bg-[#f3f4f8] bg-opacity-25 backdrop-filter backdrop-blur-lg h-[25%] bottom-0 absolute w-[50%] mb-[230px]"></div>
      </div>
    </div>
  );
}
