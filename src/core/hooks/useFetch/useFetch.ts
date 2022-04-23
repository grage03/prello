import { useEffect, useState } from 'react'

export const useFetch = <T>(action: Function, ...args: T[]) => {
  const [ data, setData ] = useState<any>(null)
  const [ error, setError ] = useState<any>(null)

  const getResponse = async () => {
    try {
      const response = await action.apply(this, args)
      setData(response)
    } catch (e) {
      setError(e)
    }
  }

  useEffect(() => {
    getResponse()
  }, [])

  return {
    data,
    error,
  }
}
