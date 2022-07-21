import { useAppDispatch, useAppSelector } from '../app/hooks'
import { counterAction } from '../app/store'

export const useCounter = () => {
    const dispatch = useAppDispatch()
    const counter = useAppSelector((state) => state.counter.counter)
    const showCounter = useAppSelector((state) => state.counter.showCounter)

    const increment = () => dispatch( counterAction.increment() )
    const decrement = () => dispatch( counterAction.decrement() )
    const toggle = () => dispatch( counterAction.toggleCounter() )


    return { counter, showCounter, increment, decrement, toggle }
}