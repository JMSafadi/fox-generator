type Props = {
  image: string
}

const RandomFox = ({ image }: Props): JSX.Element => {

  return (
    <img 
      src={image}
      alt='fox' 
      width='320' 
      height='auto' 
      className='mx-auto rounded-md bg-gray-300'/>
  )
}

export default RandomFox
