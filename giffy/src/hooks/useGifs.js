import { useEffect, useState, useContext } from "react"
import getGifs from "../services/getGifs"
import { GifsContext } from "../context/GifsContext"

export function useGifs ({keyword} = {keyword: 'spiderman'}) {
    const [loading, setLoading] = useState(false)
    const {gifs, setGifs} = useContext(GifsContext)

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
    }, [keyword, setGifs])

    return {loading, gifs}
}