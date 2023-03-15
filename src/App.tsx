import { MouseEventHandler, useState } from 'react'
import './App.css'
import RandomFox from './components/RandomFox'

const randomNum = () => Math.floor(Math.random() * 123) + 1
const generateId = () => Math.random().toString(36).substr(2, 9)

function App() {

  interface ImageItems {
    id: string,
    url: string
  }

  const [images, setImages] = useState<ImageItems[]>([])

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (e) => {
    
    e.preventDefault()

    const newFox = {
        id: generateId(), 
        url: `https://randomfox.ca/images/${randomNum()}.jpg`
      }
      setImages([
        newFox,
        ...images
      ])
  }

  return (
    <div className='app'>
      <h1 className='text-3xl font-bold underline'>Hola mundovich</h1>
      <h4>Random Foxes Generator</h4>
      <button onClick={addNewFox} className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>Add fox</button>
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
