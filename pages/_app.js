import Middleware from "../components/Middleware/Middleware";
import "../styles/globals.css";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion'
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import Head from "next/head";


/*
TODO:
  1. Buat loading page?
*/

function MyApp({ Component, pageProps }) {
  const [Loading, setLoading] = useState(true)

  const router = useRouter()

  useEffect(() => {
    const handleStart = (url) => {
      setLoading(true)
    }
    const handleStop = () => {
      setLoading(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
    return () => {
    }
  }, [])

  return (
    <>
    <Head>
    <title>KMA</title>
    </Head>
      <LoadingScreen loading={Loading && (router.pathname == "/")} />
      <Middleware>
        <Component {...pageProps} />
      </Middleware>
    </>
  );
}

export default MyApp;
