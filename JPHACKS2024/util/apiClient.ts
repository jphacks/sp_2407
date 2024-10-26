import api from '@/api/$api'
import aspida from '@aspida/fetch';

const apiClient = api(
  aspida(undefined, {
    baseURL: process.env.BASE_URL,
    throwHttpErrors: true,
  })
)

export default apiClient