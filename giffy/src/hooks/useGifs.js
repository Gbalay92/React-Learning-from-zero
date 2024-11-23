import { useEffect, useState } from "react"
import getGifs from "../services/getGifs"


export function useGifs ({keyword} = {keyword: 'spiderman'}) {
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])

    useEffect(function () {
    setLoading(true)
    
    const keywordToUse = keyword ? keyword : 
        localStorage.getItem('lastKeyword') || 'random'

    getGifs({ keyword: keywordToUse })
        .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        localStorage.setItem('lastKeyword')
        })
    }, [keyword])

    return {loading, gifs}
}