let baseUrl = ''

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:8080'
} else {
  baseUrl = 'http://localhost:8080'
}

export {
  baseUrl
}