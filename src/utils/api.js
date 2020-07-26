import axios from 'axios'
import { API_BASE_URL, API_QUESTION_BASE_URL } from '../constants'

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})


const questionClient = axios.create({
  baseURL: API_QUESTION_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})


export const makeBaseCall = (method, url, data = {}, headers = {}, params = {}) => client.request({
  method,
  data,
  url,
  headers,
  params
})


export const makeQuestionCall = (method, url, data = {}, headers = {}, params = {}) => questionClient.request({
  method,
  data,
  url,
  headers,
  params
})

