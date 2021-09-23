import 'tailwindcss/tailwind.css'
import 'public/global.css'
import React, { useState } from 'react'
import Router, { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'


function MyApp({ Component, pageProps }) {

  // Page Transition
  var [loading, setLoading] = useState(false)

  Router.events.on('routeChangeStart', () => {
    setLoading(true)
  })

  Router.events.on('routeChangeComplete', () => {
    if (!loading) {
      setTimeout(() => { setLoading(false) }, 3000)
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
    </>
  )
}

export default MyApp
