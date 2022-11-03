import axios from "axios"
axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5"

class Api {
    async fetchWather() {
        try {
            const fetchWather = await axios.get(`/forecast?lat=${41.3267}&lon=${69.2283}&units=metric&appid=d3154a760aae9bef043fc8d02c2db3a4`) 
            return fetchWather.data
        } catch(err) {
            console.log(err)
        }
    }
}

export const api = new Api() 