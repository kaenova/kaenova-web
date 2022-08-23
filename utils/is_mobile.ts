import { useEffect, useState } from "react";

export function useCheckMobile() : boolean {
  const [isMobile, setisMobile] = useState(true)

  useEffect(() => {
    if (typeof screen.orientation !== 'undefined') {
      setisMobile(false)
    }
  }, [])
  
  return isMobile
}