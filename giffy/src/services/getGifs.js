/* eslint-disable no-template-curly-in-string */

export default function getGifs ({keyword = 'pandas'} = {}) {
    const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=gZPS2jumxW1yZSKE0nWl2oNrck8h7lXt&q=tigre&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips'
  
    return fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const {data = []} = response
        if (Array.isArray(data)){
            const gifs = data.map(image => {
                const {images, title, id} = image
                const {url} =  images.fixed_height_downsampled
            return {title , id, url}
    })
    return gifs
        }
    })
}