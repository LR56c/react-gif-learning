const API_KEY = '2Ysa5TN1UhsonBT8aAI7AsWfCA1Tfdaw'

export const getGifs = async (category) => {

  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=${API_KEY}&limit=10`

  const response = await fetch(url)

  const {data} = await response.json()

  return data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))
}
