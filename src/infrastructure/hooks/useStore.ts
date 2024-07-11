import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store/store'


export const useStore = () => {
    const useAppDispatch = useDispatch.withTypes<AppDispatch>()
    const useAppState = useSelector.withTypes<RootState>()

    return { useAppState, useAppDispatch }
}
