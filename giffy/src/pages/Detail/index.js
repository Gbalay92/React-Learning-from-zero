import { useContext } from "react"
import { GifsContext } from "../../context/GifsContext"
import Gif from "../../components/Gif/Gif"

export default function Detail ({ params }) {
    const {gifs} = useContext(GifsContext)

    console.log({gifs})

    const gif =  gifs.find(singleGif =>
       singleGif.id === params.id
    )
    console.log({gif})


    return <Gif {...gif}/>
  }