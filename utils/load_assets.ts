import { Loader } from "pixi.js";
import { useEffect, useState } from "react";

type AssetLoader = {
  imgAsset?: string[],
  pixiAsset?: { url: string, key: string }[]
}

export function useLoadAsset(loader: AssetLoader): [boolean, number] {
  const totalAssets = (loader.imgAsset?.length || 0) + (loader.pixiAsset?.length || 0)

  const [LoadingPercentages, setLoadingPercentages] = useState(0)
  const [IsDone, setIsDone] = useState(false)

  useEffect(() => {
    // Setup pointer
    var data = {
      totalAssets: totalAssets,
      loadedAssets: 0,
      isDone: false
    }

    // Load pixi
    if (loader.pixiAsset != undefined) {
      var pixiLoader = new Loader()

      loader.pixiAsset!.map((src) => {
        pixiLoader.add({
          key: src.key,
          url: src.url,
          onComplete: () => {
            data.loadedAssets += 1
            if (data.loadedAssets == data.totalAssets) {
              data.isDone = true
            }
            setIsDone(data.isDone)
            setLoadingPercentages(data.loadedAssets / data.totalAssets)
          },
          crossOrigin: true
        })
      })

      pixiLoader.load()
    }


    // Load image
    if (loader.imgAsset != undefined)
      loader.imgAsset.map((src) => {
        const img = new Image();
        img.onload = () => {
          data.loadedAssets += 1
          if (data.loadedAssets == data.totalAssets) {
            data.isDone = true
          }
          setIsDone(data.isDone)
          setLoadingPercentages(data.loadedAssets / data.totalAssets)
        }
        img.onerror = () => {
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