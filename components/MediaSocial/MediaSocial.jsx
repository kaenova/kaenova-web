import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './MediaSocial.module.css'
import * as eva from 'eva-icons';
import Link from 'next/link'

export function MediaSocialBox(props) {
  const nama = props.icon

  useEffect(() => {
    // add this line
    eva.replace();
  }, []);

  return (
    <AnimatePresence>
      <Link href={props.href}>
        
        <motion.a 
          className={styles.box}
          href={props.href} 
          whileHover={{scale: 1.1}}
          whileTap={{scale:0.8}}
        >
          <i data-eva={nama} data-eva-fill="#353535" />
        </motion.a>
      </Link>

    </AnimatePresence>
  )
}

