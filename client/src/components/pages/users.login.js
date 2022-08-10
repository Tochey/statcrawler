import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8081/api/v1/user/login";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      navigate('/dashboard')
      // window.location = "/";
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
        <Link to='/'>
          <p className="font-bold text-[26px] px-[40px]">StatCrawler</p>
          </Link>
          <div className="py-[160px] px-[150px]">
            <h2 className="font-semibold text-[30px]">Welcome back</h2>
            <p className="text-[15px] font-semibold text-[#c9cdd2]">
              please enter your login credentials.
            </p>
            <div className="pt-6">
              <p className="mb-2">Email</p>
              <form onSubmit={handleSubmit}>
                {/* todo: increase the size of the form inputs */}
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  required
                  placeholder="enter email"
                  className="border border-green-500 px-6 py-1 rounded-md"
                />
                <p className="pt-4 mb-2">Password</p>
                <input
                  type="password"
                  name="password"
                  required
                  onChange={handleChange}
                  placeholder="enter email"
                  className="border border-green-500 px-6 py-1 rounded-md"
                />
                {error && <div>{error}</div>}
                <Link to="/forgot-password">
                  <p className="text-[12px] mt-2 font-bold text-green-500">
                    forgot password?
                  </p>
                </Link>
                <button
                  type="submit"
                  className="mt-4 text-[15px] font-semibold border rounded-lg px-[100px] text-white py-1 bg-green-500"
                >
                  login
                </button>
              </form>

              <p className="pt-4 text-[12px] text-[#c9cdd2]">
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

      {/* div handles the second half of the div */}
      <div className="h-screen w-[50%] bg-[#f3f4f8]">hello</div>
    </div>
  );
}
