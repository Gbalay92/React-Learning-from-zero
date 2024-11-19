import { Link, useLocation } from "wouter"
import { useState, useEffect } from "react"
import getGifs from "../../services/getGifs"
import ListOfGifs from "../../components/ListOfGifs"

const POPULAR_GIFS = ["Matrix", "Chile", "Colombia", "Ecuador"]

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])

    useEffect(function () {
        setLoading(true)
        getGifs({ keyword: 'Rick' })
        .then(gifs => {
            setGifs(gifs)
            setLoading(false)
        })
    }, [keyword])
    

    const handleSubmit = evt => {
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
    }
    const handleChange = evt => {
        setKeyword(evt.target.value)
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input placeholder="Search a Gif here"
            onChange={handleChange} type="text" value={keyword} />
        </form>
        <h3 className="App-title">Last Search</h3>
        <ListOfGifs gifs={gifs} />
        <h3 className="App-title">Los gifs más populares</h3>
        <ul>
        {POPULAR_GIFS.map((popularGif) => (
            <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
            </li>
        ))}
        </ul>
        </>
    )
}