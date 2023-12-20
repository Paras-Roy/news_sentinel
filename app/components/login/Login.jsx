"use client"
import { UseAuth } from "@/app/context/AuthContext"

export default function Login() {
  const {signInGoogle} = UseAuth();
  return (
    <button onClick={signInGoogle}>Please Login brother</button>
  )
}
