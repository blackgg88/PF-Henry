import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NEWS_API_KEY } from '../../config';
const api_key: string = NEWS_API_KEY;
import Breadcrumb from "../components/BreadCrumb"

interface NewsData {
  title: string;
  urlToImage: string;
}

export const News = () => {
  const [news, setNews] = useState<NewsData[]>([]);
  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=smarthome&sortBy=publishedAt&apiKey=${api_key}`,
      );
      const data = await response.json();
      setNews(data.articles);
    };
    fetchNews();
  }, []);

  return (
    <>
      <Link to='/'>
        <button>Back</button>
      </Link>
      <Breadcrumb/>
      {news.length ? (
        news?.map((news) =>
          news.urlToImage ? (
            <div>
              <h1>{news.title}</h1>
              <img src={news.urlToImage} alt='imagen' width='200px' height='250px' />
            </div>
          ) : (
            <div></div>
          ),
        )
      ) : (
        <div>
          <p>loading...</p>
        </div>
      )}
    </>
  );
};

export default News;
