import React, { useState, useEffect } from 'react'
import { dailyCData } from '../api'
import Axios from 'axios';

export default function Index() {
    useEffect(() => {
        // dailyCData()

        //     fetch("https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=aries&day=today", {
        //         "method": "GET",
        //         "headers": {
        //             "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
        //             "x-rapidapi-key": "5e0797bf0fmsh8ed7d26a34597bep1c6af8jsn9b619dff3b20",
        //             "content-type": "application/x-www-form-urlencoded"
        //         },

        //     })
        //         .then(response => {
        //             console.log(response.body);
        //         })
        //         .catch(err => {
        //             console.log(err);
        //         });

    })

    return (
        <div>
            <h2>Contact</h2>
            "x-rapidapi-key": "5e0797bf0fmsh8ed7d26a34597bep1c6af8jsn9b619dff3b20",
        </div>
    )
}
