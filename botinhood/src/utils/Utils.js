import axios from 'axios';
// import dotenv from 'dotenv'

// dotenv.config()

const CLIENT_SECRET = 'a423e11fa37a19b05a1f6725a786fc8dddda4880'
const CLIENT_ID = '0b17ccc305d2be4a87d6d54135ea0f28';
const REDIRECT_URI = 'http://localhost:3000/';

const Utils = {
    
    async getAuthToken(oauth_code) {
        // returns Authorization Token once we have our OAuth token
        const body = {
            grant_type: 'authorization_code',
            code: oauth_code,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            redirect_uri: REDIRECT_URI,
        }
        // encode data into form encoding
        const encodedBody = Object.keys(body)
        .map((key) => `${key}=${encodeURIComponent(body[key])}`)
        .join('&');
        console.log(body)
        // submit POST request
        const response = await axios({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            url: 'https://api.alpaca.markets/oauth/token',
            data: encodedBody,
        });
        
        const { data } = response;
        return data.access_token
        
    },

    parseResponse (response){
        const { bars } = response.data;
        const data = []
        for(let i = 0; i < bars.length; i++) {
            const bar = bars[i];
            const point = {
                'date': bar.t,
                'open': bar.o,
                'low': bar.l,
                'high': bar.h,
                'close': bar.c,
                'volume': bar.v
            }
            data.push(point)
        }
        return data

    }
}
export default Utils;