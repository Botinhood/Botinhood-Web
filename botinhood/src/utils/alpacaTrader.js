// import React from 'react';
import 'fs';

function alpacaAPI(){
    const Alpaca = require("@alpacahq/alpaca-trade-api");
    // const HOST = 'https://paper-api.alpaca.markets';
    const app={};
    // const headers={
    //     'Apca-Api-Key-Id': 'PKPNI7TSZ1CK8ZK574KN',
	// 	'Apca-Apa-Secret-Key': 'CnGzqFKVXHyou1wiz6eUnij5ZKhcoWw0upVMAC8G',
    //     // Authorization: "Basic "+Constants.expoConfig.extra.apcaBasicAuth,
    //     // Host: "broker-api.sandbox.alpaca.markets",
    //     // 'User-Agent': 'PostmanRuntime/7.30.1',
    //     // 'Postman-Token': "81b5cd1d-3ee4-4081-bf9d-3823608c60e2",
    //     // Accept: "*/*",
    //     // 'Cache-Control': "no-cache",
    //     // 'Accept-Encoding': "gzip, deflate, br",
    //     // Connection: "keep-alive"
    // };
    // Instantiate the API with configuration options
    const options = {
        keyId: "PKPNI7TSZ1CK8ZK574KN",
        secretKey: "CnGzqFKVXHyou1wiz6eUnij5ZKhcoWw0upVMAC8G",
        paper: true,
    };
    const alpaca = new Alpaca(options);

    // const _assets = async function(){
    //     console.log(JSON.stringify(headers))
    //     const response = await fetch(HOST+'/v2/account',{
    //         method: 'GET',
    //         headers: JSON.stringify(headers)
    //     });
    //     if (!response.ok) {
    //         throw new Error(`fetchQuoteData failed, HTTP status ${response.status}`);
    //     }
    //     return await response.json();
    // }

    app.assets= function(){
        // Get account information and print it
        alpaca.getAccount().then((account) => {
            console.log("Current Account:", account);
        });
        // return _assets();
    };

    return app;
}

export default alpacaAPI;