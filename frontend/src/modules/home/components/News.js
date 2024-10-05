import axios from 'axios';
import React, { useEffect } from 'react'

function News() {

    useEffect(() => {
        axios.get("http://localhost:8080/movies").then(data => {
            console.log(">>>check", data);

        })
    }, []);

    return (
        <div>

        </div>
    )
}

export default News