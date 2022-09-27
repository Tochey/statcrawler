import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import getUserInfo from "../../utilities/decodeJwt";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const currentDate = new Date()
    const user = getUserInfo();
    console.log(user)
    if (user && user.exp * 1000 > currentDate.getTime()) {
       navigate("/dashboard")
    } else {
      return navigate("/login")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8081/api/v1/user/login";
      const { data: res } = await axios.post(url, data);
      const { accessToken, refreshToken } = res
      //store token in localStorage 
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      navigate("/dashboard");
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
      {/* div handles the first half */}
      <div className="w-[50%] bg-white">
        <div className="py-4 ">
          <Link to="/">
            <p className="font-bold text-[26px] px-[40px]">StatCrawler</p>
          </Link>
          <div className="py-[160px] px-[150px]">
            <h2 className="font-semibold text-[30px]">Welcome back</h2>
            <p className="text-[15px] font-semibold text-[#51555a]">
              please enter your login credentials.
            </p>
            <div className="pt-6">
              <form onSubmit={handleSubmit}>
                <label
                  for="email"
                  className="block mb-2 font-medium text-gray-900"
                >
                  email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  required
                  placeholder="enter email"
                  className="bg-white border border-green-500 rounded-lg text-sm focus:outline-green-500 focus:border-green-500 block w-full p-2.5"
                />
                <div className="mt-6">
                  <label
                    for="password"
                    className="block mb-2 font-medium text-gray-900"
                  >
                    password
                  </label>
                  <input
                    type="password"
                    name="password"
                    required
                    onChange={handleChange}
                    placeholder="enter password"
                    className="bg-white border border-green-500 rounded-lg text-sm focus:outline-green-500 focus:border-green-500 block w-full p-2.5"
                  />
                </div>
                <div className="mt-3 text-sm text-red-500">
                  {error && <div>{error}</div>}
                </div>
                <div className="mt-4">
                  <Link to="/forgot-password">
                    <p className="text-[12px] mt-2 font-bold text-green-500">
                      forgot password?
                    </p>
                  </Link>
                </div>
                <button
                  type="submit"
                  className="text-white mt-4 bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-[235px] py-2.5 text-center"
                >
                  login
                </button>
              </form>
              <div className="flex justify-center w-full">
                <p className="pt-4 text-[15px] text-[#51555a]">
                  don't have an account?{" "}
                  <Link to="/signup">
                    <span className="font-semibold ml-2 text-green-500">
                      Sign up
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* div handles the second half of the div */}
      <div className="h-screen 2xl:h-screen lg:h-screen w-[50%] bg-[#f3f4f8]">
        <div className="flex justify-center items-center h-full">
          <div className="w-[200px] h-[200px] bg-green-500 rounded-full"></div>
        </div>
        <div className="bg-[#f3f4f8] bg-opacity-25 backdrop-filter backdrop-blur-lg h-[25%] bottom-0 absolute w-[50%] mb-[230px]"></div>
      </div>
    </div>
  );
}
