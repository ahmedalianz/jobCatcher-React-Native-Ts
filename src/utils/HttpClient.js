import axios from 'axios'
const baseUrl='https://jsearch.p.rapidapi.com'
const HttpClient=axios.create({
    baseURL:baseUrl,
    headers: {
        "X-RapidAPI-Key": "6583bb8001mshc98582a2160829dp1d472ajsn8a5edc59c495",
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        }
})
export default HttpClient