import { useEffect, useRef, useState } from 'react'

const preloadMargin = '300px 0px'

export function useSceneVisibility(eager = false) {
  const ref = useRef(null)
  const [mounted, setMounted] = useState(eager)
  const [visible, setVisible] = useState(eager)

  useEffect(() => {
    const element = ref.current
    if (typeof IntersectionObserver === 'undefined') {
      setMounted(true)
      setVisible(true)
      return
    }

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting)
    })
    visibilityObserver.observe(element)

    let preloadObserver
    if (!eager) {
      preloadObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true)
          preloadObserver.disconnect()
        }
      }, { rootMargin: preloadMargin })
      preloadObserver.observe(element)
    }

    return () => {
      visibilityObserver.disconnect()
      preloadObserver?.disconnect()
    }
  }, [eager])

  return { ref, mounted, visible }
}
