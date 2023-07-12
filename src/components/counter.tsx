"use client"
import cn from 'classnames'
import button from '@/components/button.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, IState, reset } from '@/redux/Slice';

function Counter() {
  const counter = useSelector<IState, number>((state) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <div className='lg:w-1/4 md:w-1/2 w-full'>
      <p className='mb-2'>Counter: {counter}</p>
      <div className='grid grid-cols-2 gap-4'>
        <button className={cn(button.btn, button['btn-green'])} onClick={() => dispatch(increment(1))}>+ 1</button>
        <button className={cn(button.btn, button['btn-red'])} onClick={() =>
          dispatch(decrement(1))}>- 1</button>
        <button className={cn(button.btn, button['btn-blue'], 'col-span-2')} onClick={() =>
          dispatch(reset())}>reset</button>
      </div>
    </div>
  );
}

export default Counter;