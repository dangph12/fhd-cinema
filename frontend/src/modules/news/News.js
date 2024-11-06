// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { fetchNews, fetchNewsById } from "../../components/services/UserService";
// import BannerSecond from "../home/components/BannerSecond";
// import { NavLink, useParams } from "react-router-dom";
// import VisaBanner from "../home/components/VisaBanner";

// function News() {
//   const buttonStyle = {
//     border: "2px solid #8bc34a", // green border
//     borderRadius: "15px", // rounded corners
//     padding: "10px 20px", // padding for the button
//     color: "#8bc34a", // green text
//     fontWeight: "bold",
//     fontFamily: "Arial, sans-serif",
//     backgroundColor: "transparent", // no background
//     display: "inline-block", // button behavior
//     marginBottom: "20px",
//   };

//   const tittle = {
//     borderRadius: "15px", // rounded corners
//     color: "#8bc34a", // green text
//     fontWeight: "bold",
//     fontFamily: "Arial, sans-serif",
//     backgroundColor: "transparent", // no background
//     display: "inline-block", // button behavior
//   };

//   const [news, setNews] = useState([]);
//   const {news_category_id} = useParams();

//   useEffect(() => {
//     getNews();
//   }, []);

//   const getNews = async () => {
//     let res = await fetchNewsById(news_category_id);
//     if (res && res.data) {
//       setNews(res.data.data);
//     }
//   };

//   return (
//     <div>
//       <BannerSecond />
//       <section className="value-combo">
//         <h2 className="">
//           <button style={buttonStyle}>FHD NEWS COMBO</button>
//         </h2>

//         <div className="combo-container">
//           {news.map((items) => (
//             <div className="combo-item1 shadow" key={items.newsId}>
//               <NavLink className="nav-link" to={`/news/${items.newsId}`}>
//                 <img
//                   style={{ width: "100%" }}
//                   src={items.newsImageUrl}
//                   alt={items.newsTitle}
//                 />
//               </NavLink>
//               <h3
//                 style={{
//                   textAlign: "center",
//                   fontSize: "20px",
//                   color: "#3b8d00",
//                   marginTop: "30px",
//                 }}
//               >
//                 <h4 style={tittle}>{items.newsTitle}</h4>
//               </h3>
//               <p>Thưởng thức ngay combo bánh Trung Thu hảo hạng của BHD Star</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <VisaBanner/>
//     </div>
//   );
// }

// export default News;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import BannerSecond from "../home/components/BannerSecond";
// import { NavLink } from "react-router-dom";
// import VisaBanner from "../home/components/VisaBanner";

// const News = () => {
//   const [newsList, setNewsList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const newsCategoryId = "111e4567-e89b-12d3-a456-426614174000";

//   const buttonStyle = {
//     border: "2px solid #8bc34a", // green border
//     borderRadius: "15px", // rounded corners
//     padding: "10px 20px", // padding for the button
//     color: "#8bc34a", // green text
//     fontWeight: "bold",
//     fontFamily: "Arial, sans-serif",
//     backgroundColor: "transparent", // no background
//     display: "inline-block", // button behavior
//     marginBottom: "20px",
//   };

//   const tittle = {
//     borderRadius: "15px", // rounded corners
//     color: "#8bc34a", // green text
//     fontWeight: "bold",
//     fontFamily: "Arial, sans-serif",
//     backgroundColor: "transparent", // no background
//     display: "inline-block", // button behavior
//   };

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/news");
//         const newsData = response.data.data;

//         // Lọc ra các bài viết thuộc danh mục "Khuyến mãi"
//         const promotionNews = newsData.filter(
//           (news) => news.newsCategory.newsCategoryId === newsCategoryId
//         );

//         setNewsList(promotionNews); // Cập nhật danh sách tin tức khuyến mãi
//       } catch (err) {
//         console.error("Lỗi khi lấy dữ liệu tin tức:", err);
//         setError("Không thể tải tin tức.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   if (loading) {
//     return <div>Đang tải...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     //   <div className="news-container">
//     //     {newsList.length > 0 ? (
//     //       newsList.map((news) => (
//     //         <div key={news.newsId} className="news-item">
//     //           <h3>{news.newsTitle}</h3>
//     //           <p>{news.newsDescription}</p>
//     //           <img src={news.newsImageUrl} alt={news.newsTitle} />
//     //         </div>
//     //       ))
//     //     ) : (
//     //       <p>Không có tin khuyến mãi nào.</p>
//     //     )}
//     //   </div>

//     <div>
//       <BannerSecond />
//       <section className="value-combo">
//         <h2 className="">
//           <button style={buttonStyle}>FHD NEWS COMBO</button>
//         </h2>

//         <div className="combo-container">
//           {newsList.map((items) => (
//             <div className="combo-item1 shadow" key={items.newsId}>
//               <NavLink className="nav-link" to={`/news/${items.newsId}`}>
//                 <img
//                   style={{ width: "100%" }}
//                   src={items.newsImageUrl}
//                   alt={items.newsTitle}
//                 />
//               </NavLink>
//               <h3
//                 style={{
//                   textAlign: "center",
//                   fontSize: "20px",
//                   color: "#3b8d00",
//                   marginTop: "30px",
//                 }}
//               >
//                 <h4 style={tittle}>{items.newsTitle}</h4>
//               </h3>
//               <p>Thưởng thức ngay combo bánh Trung Thu hảo hạng của BHD Star</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <VisaBanner />
//     </div>
//   );
// };

// export default News;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import BannerSecond from "../home/components/BannerSecond";
// import { NavLink } from "react-router-dom";
// import VisaBanner from "../home/components/VisaBanner";

// const News = () => {
//   const [newsList, setNewsList] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategoryId, setSelectedCategoryId] = useState("all");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/newscategories");
//       setCategories(response.data.data);
//     } catch (err) {
//       console.error("Lỗi khi lấy dữ liệu danh mục:", err);
//       setError("Không thể tải danh mục.");
//     }
//   };

//   const fetchNews = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/news");
//       const newsData = response.data.data;

//       if (selectedCategoryId === "all") {
//         setNewsList(newsData);
//       } else {

//         const filteredNews = newsData.filter(
//           (news) => news.newsCategory.newsCategoryId === selectedCategoryId
//         );
//         setNewsList(filteredNews);
//       }
//     } catch (err) {
//       console.error("Lỗi khi lấy dữ liệu tin tức:", err);
//       setError("Không thể tải tin tức.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCategories();
//     fetchNews();
//   }, []);

//   useEffect(() => {
//     if (selectedCategoryId) {
//       fetchNews();
//     }
//   }, [selectedCategoryId]);

//   if (loading) {
//     return <div>Đang tải...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <BannerSecond />

//       <div style={{ textAlign: "center", margin: "20px 0" }}>
//         <select
//           value={selectedCategoryId}
//           onChange={(e) => setSelectedCategoryId(e.target.value)}
//           style={{
//             padding: "10px",
//             fontSize: "16px",
//             borderRadius: "10px",
//             border: "1px solid #ccc",
//             marginBottom: "20px",
//           }}
//         >

//           <option value="all">Tất cả</option>
//           {categories.map((category) => (
//             <option key={category.newsCategoryId} value={category.newsCategoryId}>
//               {category.newsCategoryName}
//             </option>
//           ))}
//         </select>
//       </div>

//       <section className="value-combo">
//         <h2 className="">
//           <button
//             style={{
//               border: "2px solid #8bc34a",
//               borderRadius: "15px",
//               padding: "10px 20px",
//               color: "#8bc34a",
//               fontWeight: "bold",
//               fontFamily: "Arial, sans-serif",
//               backgroundColor: "transparent",
//               display: "inline-block",
//               marginBottom: "20px",
//             }}
//           >
//             FHD NEWS COMBO
//           </button>
//         </h2>

//         <div className="combo-container">
//           {newsList.length > 0 ? (
//             newsList.map((items) => (
//               <div className="combo-item1 shadow" key={items.newsId}>
//                 <NavLink className="nav-link" to={`/news/${items.newsId}`}>
//                   <img
//                     style={{ width: "100%" }}
//                     src={items.newsImageUrl}
//                     alt={items.newsTitle}
//                   />
//                 </NavLink>
//                 <h3
//                   style={{
//                     textAlign: "center",
//                     fontSize: "20px",
//                     color: "#3b8d00",
//                     marginTop: "30px",
//                   }}
//                 >
//                   <h4
//                     style={{
//                       borderRadius: "15px",
//                       color: "#8bc34a",
//                       fontWeight: "bold",
//                       fontFamily: "Arial, sans-serif",
//                       backgroundColor: "transparent",
//                       display: "inline-block",
//                     }}
//                   >
//                     {items.newsTitle}
//                   </h4>
//                 </h3>
//                 <p>
//                   {items.newsDescription.length > 100
//                     ? `${items.newsDescription.substring(0, 100)}...`
//                     : items.newsDescription}
//                 </p>
//               </div>
//             ))
//           ) : (
//             <p>Không có tin tức nào.</p>
//           )}
//         </div>
//       </section>

//       <VisaBanner />
//     </div>
//   );
// };

// export default News;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import BannerSecond from "../home/components/BannerSecond";
// import { NavLink } from "react-router-dom";
// import VisaBanner from "../home/components/VisaBanner";

// const News = () => {
//   const [newsList, setNewsList] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategoryId, setSelectedCategoryId] = useState("all");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/newscategories");
//       setCategories(response.data.data);
//     } catch (err) {
//       console.error("Lỗi khi lấy dữ liệu danh mục:", err);
//       setError("Không thể tải danh mục.");
//     }
//   };

//   const fetchNews = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/news");
//       const newsData = response.data.data;

//       if (selectedCategoryId === "all") {
//         setNewsList(newsData);
//       } else {

//         const filteredNews = newsData.filter(
//           (news) => news.newsCategory.newsCategoryId === selectedCategoryId
//         );
//         setNewsList(filteredNews);
//       }
//     } catch (err) {
//       console.error("Lỗi khi lấy dữ liệu tin tức:", err);
//       setError("Không thể tải tin tức.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCategories();
//     fetchNews();
//   }, []);

//   useEffect(() => {
//     if (selectedCategoryId) {
//       fetchNews();
//     }
//   }, [selectedCategoryId]);

//   if (loading) {
//     return <div>Đang tải...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <BannerSecond />

//       <div style={{ textAlign: "center", margin: "20px 0" }}>
//         <select
//           value={selectedCategoryId}
//           onChange={(e) => setSelectedCategoryId(e.target.value)}
//           style={{
//             padding: "10px",
//             fontSize: "16px",
//             borderRadius: "10px",
//             border: "1px solid #ccc",
//             marginBottom: "20px",
//           }}
//         >

//           <option value="all">Tất cả</option>
//           {categories.map((category) => (
//             <option key={category.newsCategoryId} value={category.newsCategoryId}>
//               {category.newsCategoryName}
//             </option>
//           ))}
//         </select>
//       </div>

//       <section className="value-combo">
//         <h2 className="">
//           <button
//             style={{
//               border: "2px solid #8bc34a",
//               borderRadius: "15px",
//               padding: "10px 20px",
//               color: "#8bc34a",
//               fontWeight: "bold",
//               fontFamily: "Arial, sans-serif",
//               backgroundColor: "transparent",
//               display: "inline-block",
//               marginBottom: "20px",
//             }}
//           >
//             FHD NEWS COMBO
//           </button>
//         </h2>

//         <div className="combo-container">
//           {newsList.length > 0 ? (
//             newsList.map((items) => (
//               <div className="combo-item1 shadow" key={items.newsId}>
//                 <NavLink className="nav-link" to={`/news/${items.newsId}`}>
//                   <img
//                     style={{ width: "100%" }}
//                     src={items.newsImageUrl}
//                     alt={items.newsTitle}
//                   />
//                 </NavLink>
//                 <h3
//                   style={{
//                     textAlign: "center",
//                     fontSize: "20px",
//                     color: "#3b8d00",
//                     marginTop: "30px",
//                   }}
//                 >
//                   <h4
//                     style={{
//                       borderRadius: "15px",
//                       color: "#8bc34a",
//                       fontWeight: "bold",
//                       fontFamily: "Arial, sans-serif",
//                       backgroundColor: "transparent",
//                       display: "inline-block",
//                     }}
//                   >
//                     {items.newsTitle}
//                   </h4>
//                 </h3>
//                 <p>
//                   {items.newsDescription.length > 100
//                     ? `${items.newsDescription.substring(0, 100)}...`
//                     : items.newsDescription}
//                 </p>
//               </div>
//             ))
//           ) : (
//             <p>Không có tin tức nào.</p>
//           )}
//         </div>
//       </section>

//       <VisaBanner />
//     </div>
//   ); 
// };

// export default News;

import React, { useEffect, useState } from "react";
import axios from "axios";
import BannerSecond from "../home/components/BannerSecond";
import { NavLink } from "react-router-dom";
import VisaBanner from "../home/components/VisaBanner";

const News = () => {
  const [newsList, setNewsList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8080/newscategories");
      setCategories(response.data.data);
    } catch (err) {
      console.error("Lỗi khi lấy dữ liệu danh mục:", err);
      setError("Không thể tải danh mục.");
    }
  };

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:8080/news");
      const newsData = response.data.data;

      if (selectedCategoryId === "all") {
        setNewsList(newsData);
      } else {
        const filteredNews = newsData.filter(
          (news) => news.newsCategoryDto.newsCategoryId === selectedCategoryId
        );
        setNewsList(filteredNews);
      }
    } catch (err) {
      console.error("Lỗi khi lấy dữ liệu tin tức:", err);
      setError("Không thể tải tin tức.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchNews();
  }, []);

  useEffect(() => {
    fetchNews();
  }, [selectedCategoryId]);

  if (loading) {
    return <div>Đang tải...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <BannerSecond />
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <select
          value={selectedCategoryId}
          onChange={(e) => setSelectedCategoryId(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            marginBottom: "20px",
          }}
        >
          <option value="all">Tất cả</option>
          {categories.map((category) => (
            <option
              key={category.newsCategoryId}
              value={category.newsCategoryId}
            >
              {category.newsCategoryName}
            </option>
          ))}
        </select>
      </div>

      <section className="value-combo">
        <h2>
          <button
            style={{
              border: "2px solid #8bc34a",
              borderRadius: "15px",
              padding: "10px 20px",
              color: "#8bc34a",
              fontWeight: "bold",
              fontFamily: "Arial, sans-serif",
              backgroundColor: "transparent",
              display: "inline-block",
              marginBottom: "20px",
            }}
          >
            FHD NEWS COMBO
          </button>
        </h2>

        <div className="combo-container">
          {newsList.length > 0 ? (
            newsList.map((items) => (
              <div className="combo-item1 shadow" key={items.newsId}>
                <NavLink className="nav-link" to={`/news/${items.newsId}`}>
                  <img
                    style={{ width: "100%" }}
                    src={items.newsImageUrl}
                    alt={items.newsTitle}
                  />
                </NavLink>
                <h3
                  style={{
                    textAlign: "center",
                    fontSize: "20px",
                    color: "#3b8d00",
                    marginTop: "30px",
                  }}
                >
                  <h4
                    style={{
                      borderRadius: "15px",
                      color: "#8bc34a",
                      fontWeight: "bold",
                      fontFamily: "Arial, sans-serif",
                      backgroundColor: "transparent",
                      display: "inline-block",
                    }}
                  >
                    {items.newsTitle}
                  </h4>
                </h3>
                <p>
                  {items.newsDescription.length > 100
                    ? `${items.newsDescription.substring(0, 100)}...`
                    : items.newsDescription}
                </p>
              </div>
            ))
          ) : (
            <p>Không có tin tức nào.</p>
          )}
        </div>
      </section>

      <VisaBanner />
    </div>
  );
};

export default News;
