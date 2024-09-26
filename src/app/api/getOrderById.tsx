import { useEffect, useState } from "react"

export const useGetOrderById = (id:string | string[]) => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/orders?filters[stripeid][$eq]=${id}&populate=*`
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url)
                const json = await res.json()
                setResult(json.data)
                setLoading(false)
            } catch (error: any) {
                setError(error)
                setLoading(false)
            }
        })()
    }, [url])

    return { loading, result, error }
}