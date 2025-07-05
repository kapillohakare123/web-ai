import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api/auction/',
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const getPlayers = () => api.get('players/')
export const getTeams = () => api.get('teams/')
export const postBid = (data) => api.post('bids/', data)
export const getMyTeam = () => api.get('my-team/')

export default api