import Gif from "./Gif"
import { useState, useEffect } from "react"
import getGifs from '../services/getGifs';


export default function ListOfGifs (){
    const [gifs, setGiffs] = useState([])

    useEffect(function () {
        console.log('effect executed')
        getGifs().then(gifs => setGiffs(gifs))
      }, [])
    return gifs.map(singleGif =>
        <Gif
          key={singleGif.id}
          title={singleGif.title}   
          url={singleGif.url} 
          id={singleGif.id}></Gif>)
}