import axios from 'axios'

axios.defaults.baseURL = 'https://fakestoreapi.com'

export const GET = async (url, params) => {
  const data = await axios({
    method: 'get',
    url,
    params,
  }).then((response) => response.data)

  return data
}
