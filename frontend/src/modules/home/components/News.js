import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { fetchNews } from '../../../components/services/UserService';

function News() {

    const [news, setNews] = useState([])

    useEffect(() => {
        getNews();
    }, []);

    const getNews = async () => {
        let res = await fetchNews();
        if (res && res.data) {
            setNews(res.data.data);
        }
    }

    // checck api news
    // useEffect(() => {
    //     axios.get("http://localhost:8080/movies").then(data => {
    //         console.log(">>>check", data);

    //     })
    // }, []);

    return (
        <div>
            <section class="value-combo">
                <h2>FHD NEWS COMBO</h2>
                <div class="combo-container">
                    {news.map((items, index) => {
                        return (
                            <div class="combo-item shadow" key={items.newsId}>
                                <img src={items.newsImageUrl} alt="Combo Trung Thu Sum Vầy" />
                                <h3>{items.newsTitle}</h3>
                                <p>{items.newsDescription}</p>
                            </div>
                        )
                    })
                    }
                </div>
            </section>
        </div>
    )
}

export default News