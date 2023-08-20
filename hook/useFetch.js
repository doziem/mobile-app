import { useEffect, useState } from 'react'
import axios from 'axios';


const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.get('http://192.168.43.110:3100/api/products');

            setData(response.data)
            setIsLoading(false);
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }
    console.log('Fetch hook', data);
    return { data, isLoading, error, refetch }
}

export default useFetch