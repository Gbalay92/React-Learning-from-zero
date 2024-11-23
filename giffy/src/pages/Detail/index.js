import { useContext } from "react"
import { GifsContext } from "../../context/GifsContext"

export default function Detail ({ params }) {
    const gifContext = useContext(GifsContext)

    console.log(params.id)
    console.log(gifContext)

    return <h1>GIF con id {params.id}</h1>
  }