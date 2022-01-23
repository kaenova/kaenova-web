import React, { useState, createRef, useEffect } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'
import Cookies from 'universal-cookie';

function Login() {
  const cookies = new Cookies();
  var reRef = createRef()
  const [Data, setData] = useState({
    "token": "",
    "username": "",
    "password": ""
  })
  const [APICallsSuccess, setAPICallsSuccess] = useState(undefined) // undefined, false, true

  const handleLogin = async (e) => {
    e.preventDefault()
    if ((Data["username"] == "") || (Data["password"] == "")) {
      alert("Harap mengisi username dan password")
      return
    }
    const tokenRe = await reRef.current.executeAsync()

    var varJsonData = { ...Data, token: tokenRe }

    try {
      let response =  await axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/auth/`, varJsonData)
      cookies.set("KAE_TOKEN", response.data["Data"]["access_token"])
      setAPICallsSuccess(true)
    } catch (e) {
      setAPICallsSuccess(false)
    }
  }

  const handleLogout = async (e) => {
    e.preventDefault()
    cookies.remove("KAE_TOKEN")
    if (cookies.get("KAE_TOKEN") == undefined){
      setAPICallsSuccess(undefined)
    }
  }

  const renderResponse = () => {
    return (
      <div className={'opacity-0 flex flex-col mt-3 p-2 bg-white rounded-md justify-center items-center select-none ' + [(APICallsSuccess) && '!opacity-100 ', (APICallsSuccess == false) && ' !opacity-100 bg-red-500 text-white ']}>{APICallsSuccess ? "Logged in as Kaenova" : !APICallsSuccess ? "Fail to log in" : ""}</div>
    )
  }

  useEffect(() => {
    let isLogged = cookies.get("KAE_TOKEN")
    if (isLogged != undefined){
      setAPICallsSuccess(true)
    }
  }, []);
  

  return (
    <>
      <div className='h-full flex flex-col justify-center items-center'>
        <div className='w-[300px] flex flex-col'>
          <h1 className='font-bold tracking-normal self-center'>Log in as Kaenova</h1>
          <form method='post' onSubmit={handleLogin} className='flex flex-col mt-5 select-none'>
            <ReCAPTCHA
              ref={reRef}
              sitekey='6Lecjh8eAAAAALVQX8n85Nstzf2-IJq_ZZz-rodb'
              size='invisible'
            />
            <p>Username:</p>
            <input onChange={(e) => setData({ ...Data, username: e.target.value })} type="text" className='text-[14px] border-2 rounded-md p-1 px-2 shadow-sm  focus:border-blue-400 focus:outline-none' />
            <p>Password:</p>
            <input onChange={(e) => setData({ ...Data, password: e.target.value })} type="password" className='text-[14px] border-2 rounded-md p-1 px-2 shadow-sm focus:border-blue-400 focus:outline-none' />
            <button type='submit' className='bg-white shadow-md p-3 mt-3 rounded-md'>Log In</button>
          </form>
          {renderResponse()}
          <button onClick={handleLogout} className='p-3 bg-white rounded-md shadow-md mt-5'>Logout</button>
        </div>
      </div>
    </>
  )
}

export default Login
