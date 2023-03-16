import { MouseEventHandler, useState } from 'react'
import './App.css'
import LazyImage from './components/LazyImage'

const randomNum = () => Math.floor(Math.random() * 123) + 1
const generateId = () => Math.random().toString(36).substr(2, 9)

function App() {


  const [images, setImages] = useState<ImageItems[]>([
    {
      id: generateId(), 
      url: `https://randomfox.ca/images/${randomNum()}.jpg`
    }
  ])

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (e) => {

    e.preventDefault()

    const newFox = {
        id: generateId(), 
        url: `https://randomfox.ca/images/${randomNum()}.jpg`
      }
      setImages([
        ...images,
        newFox
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
              <LazyImage 
                src={url} 
                alt='fox' 
                width='320' 
                height='auto' 
                className='mx-auto rounded-md bg-gray-300'/>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default App
