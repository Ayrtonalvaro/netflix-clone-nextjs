import useSWR from 'swr'
import fetcher from '@/lib/fetcher'

const useBillaboard = () => {
  const {data, error, isLoading} = useSWR('/api/random', fetcher ) 

  return {
    data,
    error,
    isLoading
  }
}

export default useBillaboard