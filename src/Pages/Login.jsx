import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-4 m-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative overflow-hidden">
        
        {/* Top Green Shape */}
        <div className="absolute top-0 left-0 w-full h-32 bg-green-700 rounded-b-[50%] flex justify-center items-center">
          {/* Leaf Icon */}
          <div className="flex space-x-1 items-center">
            <div className="w-8 h-8 bg-green-500 rounded-full transform rotate-45"></div>
            <div className="w-8 h-8 bg-green-300 rounded-full -ml-2"></div>
          </div>
        </div>

        {/* Login Form */}
        <div className="mt-36">
          <h2 className="text-center text-3xl font-extrabold text-green-900 mb-6">Log In</h2>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-green-600" />
                Remember me
              </label>
              <a href="#" className="text-green-700 hover:underline font-semibold">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-900 transition"
            >
              Log In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-t" />
            <span className="mx-3 text-gray-400 text-sm">Or Sign In with</span>
            <hr className="flex-grow border-t" />
          </div>

          {/* Social login */}
          <div className="flex justify-center space-x-6">
          <img
  src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png"
  className="w-8 h-8 object-contain hover:scale-110 transition duration-300"
  alt="facebook"
/>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/09/IOS_Google_icon.png"
              className="w-8 h-8 hover:scale-110 transition"
              alt="google"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              className="w-8 h-8 hover:scale-110 transition"
              alt="apple"
            />
          </div>

          {/* Bottom Text */}
          <div className="text-center text-sm mt-6">
            Don't have an account?{" "}
            <Link to="/signup" className="text-green-700 font-semibold hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
