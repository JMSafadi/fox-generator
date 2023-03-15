import { useState } from 'react'
import './App.css'
import RandomFox from './components/RandomFox'

const randomNum = () => Math.floor(Math.random() * 123) + 1
const generateId = () => Math.random().toString(36).substr(2, 9)

function App() {

  interface ImageItems {
    id: string,
    url: string
  }

  const [images, setImages] = useState<ImageItems[]>([
    {id: generateId(), url: `https://randomfox.ca/images/${randomNum()}.jpg`},
    {id: generateId(), url: `https://randomfox.ca/images/${randomNum()}.jpg`},
    {id: generateId(), url: `https://randomfox.ca/images/${randomNum()}.jpg`},
    {id: generateId(), url: `https://randomfox.ca/images/${randomNum()}.jpg`},
    {id: generateId(), url: `https://randomfox.ca/images/${randomNum()}.jpg`},
  ])

  return (
    <div className='app'>
      <h1 className='text-3xl font-bold underline'>Hola mundovich</h1>
      <h4>Random Foxes Generator</h4>
      <div>
        {images.map(({ id, url }) => {
          return (
            <div key={id} className='p-4'>
              <RandomFox image={url}/>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default App
