import { useEffect, useRef, useState } from "react"

type Props = {
  image: string
}

const RandomFox = ({ image }: Props): JSX.Element => {

  const [src, setSrc] = useState('"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="')

  const node = useRef<HTMLImageElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSrc(image)
        }
      })
    })
    if (node.current) {
      observer.observe(node.current)
    }
    return () => observer.disconnect()
  }, [image])
 
  return (
    <img 
      ref={node}
      src={src}
      alt='fox' 
      width='320' 
      height='auto' 
      className='mx-auto rounded-md bg-gray-300'/>
  )
}

export default RandomFox
