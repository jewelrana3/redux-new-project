import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreament, increament ,increamentByValue} from '../redux/feature/counter/counterSlice';

const Counter = () => {
    const {count} = useSelector((state)=>(state.counter))
    const dispatch = useDispatch();
    console.log(count)
    return (
        <div>
            <button  className='border border-black m-2 p-2'onClick={() => dispatch(increamentByValue(5))}>Increament by 5</button><br />
            <button className='border border-black m-2 p-2' onClick={() => dispatch(increament())}>Increament</button>
            <div>
               {count}
            </div>
            <button className='border border-black m-2 p-2' onClick={() => dispatch(decreament())}>Decreament</button>
        </div>
    );
};

export default Counter;