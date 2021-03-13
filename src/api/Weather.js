import axios from 'axios';

const KEY = 'd9caa857fb31ed8f9a1f7aa25a86ce13';

export default axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5',
    params: {
        appid: KEY,
    }
})