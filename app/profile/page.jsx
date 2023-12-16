"use client"

import React from 'react'
import { UseAuth } from '../context/AuthContext'

export default function Page() {
  const {user, signInGoogle, signOutGoogle} = UseAuth();
  const login = async () => {
    try {
      await signInGoogle()
    }
    catch (error) {
      console.log(error)
    }
  }

  const logout = async () => {
    try {
      await signOutGoogle()
    }
    catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      {user?<><div>Profile of {user.email} </div><div onClick={logout}>Logout</div></>:<div onClick={login}>Login</div>}
    </div>
  )
}
