import { useEffect, useState } from "react";

export function useScrollMouse(intervalMs: number): boolean {
  const [IsScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    // Prepare pointer

    var timer: NodeJS.Timeout;
    window.addEventListener('scroll', function () {
      if (timer !== null) {
        clearTimeout(timer);
      }
      setIsScrolling(true)
      timer = setTimeout(function () {
        setIsScrolling(false)
      }, intervalMs);
    }, false);
  })

  return IsScrolling
}