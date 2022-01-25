import Middleware from "../components/Middleware/Middleware";
import "../styles/globals.css";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import { NextSeo } from 'next-seo';


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
      <NextSeo
        title="KMA"
        description="Kaenova's portfolio and personal platform. Kaneova is a Software Engineer and Data Engineer studying in Telkom University. He likes to explore new technology."
        openGraph={
          {
            title: "KMA: Homepage",
            description: "Kaenova's portfolio and personal platform. Kaneova is a Software Engineer and Data Engineer studying in Telkom University. He likes to explore new technology.",
            url: "https://kaenova.my.id",
            images: [{url: "https://kaenova.my.id/SEO.png"}],
            site_name: "KMA"
          }
        }
      />
      {
      Loading ?
      <LoadingScreen loading={Loading && (router.pathname == "/")} />
      :
      <Middleware>
        <Component {...pageProps} />
      </Middleware>
    }
    </>
  );
}

export default MyApp;
