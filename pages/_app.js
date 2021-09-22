import 'tailwindcss/tailwind.css'
import 'public/global.css'
import React, { useState } from 'react'
import Router, { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import { InitialPage, PageTransition } from '@Components/Transition'

function MyApp({ Component, pageProps }) {

  // Router
  var router = useRouter()

  // Page Transition
  var [loading, setLoading] = useState(false)

  // Root Inital PaMyAppge Transition
  var [onRoot, setRoot] = useState(router.pathname === "/")
  var [counter, setCounter] = useState(0)


  Router.events.on('routeChangeStart', () => {
    // Untuk memastikan hanya muncul di root dan awal page
    setCounter(counter + 1)
    setRoot(false)
    setLoading(true)
  })

  Router.events.on('routeChangeComplete', () => {
    if (!loading) {
      setTimeout(() => { setLoading(false) }, 1000)
    }
  })

  return (
    <>
      {/* Main Component */}
      <AnimatePresence exitBeforeEnter>
        {
          !loading &&
          <motion.div
            className="sticky top-0 z-0"
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{

              opacity: 0
            }}
            transition={{ easings: "linear" }}
          >
            <Component {...pageProps} />
          </motion.div>
        }
      </AnimatePresence>

      {
        onRoot &&
        <InitialPage activate="true"/>
      }

      {
        counter==0 ?
        <PageTransition activate="true" load={loading} display="false"/>
        :
        <PageTransition activate="true" load={loading} display="true"/>
      }

    </>
  )
}

export default MyApp
