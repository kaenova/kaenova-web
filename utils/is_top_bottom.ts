import { useEffect, useState } from "react";

export function useCheckTop(): boolean {
  const [isTop, setisTop] = useState(true)

  useEffect(() => {
    document.onscroll = () => {
      if (window.scrollY != 0) {
        setisTop(false)
      } else {
        console.log("top")
        setisTop(true)
      }
    }
  }, [])

  return isTop
}