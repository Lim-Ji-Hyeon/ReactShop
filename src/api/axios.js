import axios from 'axios'

export const GET = async (url, params) => {
  const data = await axios({
    url,
    method: 'get',
    baseURL: 'https://fakestoreapi.com',
    params,
  })
    .then((response) => response.data)
    .catch((error) => {
      console.log('Error', error.message)
      console.log(error.config)
    })

  return data
}
