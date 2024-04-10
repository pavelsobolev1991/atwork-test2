import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'

export const useAppDispatch = () => useDispatch<TestAppAPI.AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<TestAppAPI.RootState> = useSelector