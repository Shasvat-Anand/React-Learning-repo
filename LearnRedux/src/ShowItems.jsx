 
import { useSelector } from 'react-redux'

const ShowItems = () => {
  const state = useSelector(state => state)
  return (
    <div>
      <h1 className='text-3xl pb-5  text-orange-400 '>All Items</h1>

        <div className='text-green-400  text-2xl '>

        <ul>
          {state.products.map(( items, index) =>(
            <li key={index}>{index + 1} : {items}</li>
          ))}
        </ul>
          </div>
    </div>
  )
}

export default ShowItems