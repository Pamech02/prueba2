import { useEffect, useState } from "react"

const useFetch = (url)=>{
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      const getData = async ()=>{
        setLoading(true)
        try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('La respuesta no fue correcta')
        }
        const data = await res.json();
        setData(data);
        console.log(data)
        setError(null)
        } catch (error) {
          setError(error.message)
          setData(null)
        } finally{
          setLoading(false)
        }
       
      }
      getData();
    }, [url])

    return {data, loading, error};
    
}

export default useFetch;