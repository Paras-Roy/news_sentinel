"use client"

import React from 'react'
import { UseAuth } from '../context/AuthContext'
import { getCategories } from '../utils/nlp';

export default function Page() {
  const {user, signInGoogle, signOutGoogle} = UseAuth();
  const [categories, setCategories] = React.useState("")
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

  const handleGetCategories = async () => {
    const categories = await getCategories();
    setCategories(categories);
  }


  console.log(user)
  return (
    <div>
      {user?<><div>Profile of {user.email} </div><div onClick={logout}>Logout</div></>:<div onClick={login}>Login</div>}
      <button onClick = {handleGetCategories}
      >Click Me</button>
      <div>{categories}</div>
    </div>
  )
}
