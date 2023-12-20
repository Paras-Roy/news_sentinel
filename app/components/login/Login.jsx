"use client"
import { FaGoogle } from "react-icons/fa";
import { UseAuth } from "@/app/context/AuthContext"

export default function Login() {
  const { signInGoogle } = UseAuth();
  return (
    <div className="min-h-screen bg-cover" >
      <div className="min-h-screen flex flex-col justify-center items-center">

        <h1 className="text-4xl font-bold animate-bounce">Welcome Please Sign In</h1>

        {/* <style>
          @keyframes bounce {
            0 % { transform: translateY(0); }
      50% {transform: translateY(-10px); }
          100% {transform: translateY(0); }
    }
        </style> */}
        <div className="w-128 flex flex-col justify-center items-center gap-5 rounded-lg shadow-md bg-white p-24 text-center">
          <h1 className="text-xl font-bold mb-4">Sign in to access this portal!</h1>
          <div>
            <button onClick={signInGoogle} className="flex justify-center items-center gap-3 py-6 px-6 rounded-lg font-semibold bg-blue-500  text-white hover:bg-blue-700">
              <FaGoogle />
              Sign In

            </button>

          </div>
        </div>
      </div>
    </div>
  )
}
