import axios from 'axios'
import Vue from 'vue'
const instance = axios.create({
  baseURL: '', // public api differs
  withCredentials: false
})
instance.interceptors.request.use(config => {
  // Called on request
  return config
})
instance.interceptors.response.use(
  response => {
    // if success response return it
    return response
  },
  async error => {
    let message = ''
    if (typeof error.response !== 'undefined') {
      if (error.response.status === 404) {
        // unknown api call
        message = "Oops! That page couldn't be found."
      } else if (error.response.status > 501) {
        //  api call with no response
        message = 'The Connection has timed out. Please try again.'
      } else if (error.response.status === 400) {
        // bad request
        message = 'Invalid request passed to the client.'
      } else if (error.response.status === 500) {
        // code mistake in backend
        message = 'Internal server error.'
      } else {
        message = 'Something went wrong.'
      }
    } else {
      //  if network error
      message = 'Please check your internet connection.'
    }
    // call notification to show the error message
    await Vue.prototype.$notification.success({ message })
    return Promise.reject(error)
  }
)
export default instance
