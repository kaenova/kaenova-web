import { useEffect, useState } from "react";

export function useScrollMouse(intervalMs: number): [number] {
  const [ScrollDelta, setScrollDelta] = useState(0)

  useEffect(() => {
    // Prepare pointer

    var timer: NodeJS.Timeout;
    window.addEventListener('wheel', function (e) {
      setScrollDelta(e.offsetY)
    })
    
  })

  return [ScrollDelta]
}