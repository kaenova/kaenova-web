import Lottie from 'react-lottie'
import { MediaSocialBox } from '@Components/MediaSocial/'
import * as animationData from '@Public/LoadingKMALogo.json'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {

  const animationOption = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <span className="animation">
        <Lottie options={animationOption}
          height={100}
          width={100}
        />
      </span>
      <div>
        <h1 className="text-center" style={{ letterSpacing: "0.3em" }}>
          KMA
        </h1>
        <motion.p className="text-center"
        style={{ letterSpacing: "0.3em" }}
        initial={{
          letterSpacing: "0.6em"
        }}
        animate={{
          letterSpacing: "0.3em"
        }}
        transition={{
          duration: 1,
          ease: [1,0,.61,1.35],
          delay: 0.1
        }}
        >
          Kaenova Mahendra Auditama
        </motion.p>
      </div>
      <div className="mt-5 flex flex-col justify-center items-center">
        <p>
          The Site is Under Development
        </p>
          <div className="flex flex-row gap-4 mt-2">
            <MediaSocialBox icon="github" href="https://github.com/kaenova" />
            <MediaSocialBox icon="linkedin" href="https://www.linkedin.com/in/kaenova/" />
            <MediaSocialBox icon="twitter" href="https://twitter.com/i/events/1275477348419170317" />
          </div>
      </div>
    </div>
  )
}
