import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function LoadingScreen({ loading }) {
  const [LoadingType, setLoadingType] = useState(["Loading.", "Loading..", "Loading..."])
  const [LoadingText, setLoadingText] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      if (LoadingText == LoadingType.length - 1) {
        setLoadingText(0)
      } else {
        setLoadingText(LoadingText + 1)
      }
    }, 500)
  }, [LoadingText])

  return (
    <>
      <AnimatePresence initial={false} exitBeforeEnter>
        {
          loading &&
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{duration:1}}
            className='fixed w-full h-full flex flex-row justify-center items-center select-none bg-white-template z-[999]'>
            <p className='tracking-normal'>{LoadingType[LoadingText]}</p>
            <p className='absolute bottom-3 text-[11px] tracking-normal'>Kaenova Mahendra Auditama</p>
          </motion.div>
        }
      </AnimatePresence>
    </>
  )
}

export default LoadingScreen
