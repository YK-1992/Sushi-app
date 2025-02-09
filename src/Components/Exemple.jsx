import { useState } from 'react';
import './example.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/slises/filterSlice'

const Example = () => {
// const [count, setCount] = useState(0);

// function Counter () {
//   setCount(count + 1);

// }
const count = useSelector(state => state.counter.value)
const dispatch = useDispatch()

  return (
  <div className='container'>
  {/* <button onClick={()=> {setCount(count -1)}}>-</button>
<div className='block'>{count}</div>
  <button onClick={Counter}>+</button>  */}

<div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
  </div>
  )
}
   

export default Example;