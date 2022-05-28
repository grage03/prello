import { useState } from 'react'

// TODO: either delete useFetch, or figure out how to optimize them
export const useDispatch = <T>(action: Function) => {
  const [ data, setData ] = useState<any>(null)
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState<any>(null)

  const dispatch = async (...args: T[]) => {
    try {
      setLoading(true)
      const response = await action.apply(this, args)
      setData(response)
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }

  return {
    dispatch,
    data,
    loading,
    error,
  }
}
