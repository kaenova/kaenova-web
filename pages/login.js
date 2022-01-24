import React from 'react'
import Login from '../components/Login/Login'
import { NextSeo } from 'next-seo'

function login() {
  
  return (
    <>
    <NextSeo
        title="KMA: Login"
        description="Kaenova's portfolio and personal platform. Kaneova is a Software Engineer and Data Engineer studying in Telkom University. He likes to explore new technology."
        openGraph={
          {
            title: "KMA: Login Page",
            description: "Kaenova's portfolio and personal platform. Kaneova is a Software Engineer and Data Engineer studying in Telkom University. He likes to explore new technology.",
            url: "https://kaenova.my.id",
            images: [{url: "https://kaenova.my.id/SEO.png"}],
            site_name: "KMA"
          }
        }
      />
      <Login/>
    </>
  )
}

export default login
