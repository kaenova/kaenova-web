import { useEffect, useState } from "react";

type AssetLoader = {
  imgAsset?: string[]
}

export function useLoadAsset(loader: AssetLoader) : [boolean, number] {
  const totalAssets = loader.imgAsset!.length

  const [LoadingPercentages, setLoadingPercentages] = useState(0)
  const [IsDone, setIsDone] = useState(false)

  useEffect(() => {
    // Setup pointer
    var data = {
      totalAssets: totalAssets,
      loadedAssets: 0,
      isDone: false
    }

    // Load image
    if (loader.imgAsset != undefined)
      loader.imgAsset.map((src) => {
        const img = new Image();
        img.onload = () => {
          console.log(`complete load ${src}`)
          data.loadedAssets += 1
          if (data.loadedAssets == data.totalAssets) {
            data.isDone = true
          }
          setIsDone(data.isDone)
          setLoadingPercentages(data.loadedAssets / data.totalAssets)
        }
        img.onerror = () => {
          console.log(`err load ${src}`)
          data.loadedAssets += 1
          if (data.loadedAssets == data.totalAssets) {
            data.isDone = true
          }
          setIsDone(data.isDone)
          setLoadingPercentages(data.loadedAssets / data.totalAssets)
        }
        img.src = src;
      })
  }, [])

  return [IsDone, LoadingPercentages]
}