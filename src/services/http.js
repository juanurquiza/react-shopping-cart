import axios from 'axios'

// TODO: later we'll define this constant as an env variable
export const BASE_URL = 'https://fakestoreapi.com'

export const get = (endpoint) => {
  return axios.get(`${BASE_URL}/${endpoint}`)
}

export const post = (endpoint, data = {}) => {
  return axios.post(`${BASE_URL}/${endpoint}`, data)
}

export const patch = (endpoint, data = {}) => {
  return axios.patch(`${BASE_URL}/${endpoint}`, data)
}

export const remove = (endpoint) => {
  return axios.delete(`${BASE_URL}/${endpoint}`)
}
