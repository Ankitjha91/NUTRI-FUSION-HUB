import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-4 m-4 ">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative overflow-hidden">
        
        {/* Top Green Shape */}
        <div className="absolute top-0 left-0 w-full h-32 bg-green-700 rounded-b-[50%] flex justify-center items-center">
          {/* Back Arrow */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-5 left-5 text-white text-2xl font-bold hover:scale-110 transition"
          >
            ←
          </button>
        </div>

        {/* Sign Up Form */}
        <div className="mt-36">
          <h2 className="text-center text-3xl font-extrabold text-green-900 mb-6">Sign Up</h2>

          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
            </div>
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
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-900 transition"
            >
              Sign Up
            </button>
          </form>

          {/* Bottom Text */}
          <div className="text-center text-sm mt-6">
            Already have an account?{" "}
            <Link to="/" className="text-green-700 font-semibold hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
