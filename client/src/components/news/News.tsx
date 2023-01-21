import { useEffect, useState } from "react";
import { NEWS_API_KEY } from "../../../config";

const api_key: string = NEWS_API_KEY;

interface NewsData {
  title: string;
  urlToImage: string;
  url: string;
  publishedAt: string;
}

export const News = () => {
  const [news, setNews] = useState<NewsData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [slicedNew, setSlicedNew] = useState<NewsData[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=smarthome&sortBy=publishedAt&apiKey=${api_key}`
      );
      const data = await response.json();
      setNews(data.articles);
      const arr = data.articles.slice((page - 1) * 4, (page - 1) * 4 + 4);
      setSlicedNew(arr);
    };
    fetchNews();
  }, []);

  useEffect(() => {
    const arr = news.slice((page - 1) * 4, (page - 1) * 4 + 4);
    setSlicedNew(arr);
  }, [page]);

  const buttonHandler = () => {
    if (page < news.length / 4) {
      setPage(page + 1);
    }
  };

  const buttonHandler2 = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="news_container">
      {slicedNew.length > 0 ? (
        <div className="news_container_firstLine">
          {/* contenedor de las tarjetas(a) */}
          <div className="news_firstLine_cardRow">
            <a
              className="news_firstLine_firstCard"
              href={slicedNew[0].url}
              target="_blank"
            >
              <img src={slicedNew[0].urlToImage} alt="firstNews" />
              <div className="news_firstLine_Content">
                <h1>{slicedNew[0].title.substring(0, 27) + "..."}</h1>
                <p>{slicedNew[0].publishedAt.substring(0, 10)}</p>
              </div>
            </a>

            <a
              className="news_firstLine_secondCard"
              href={slicedNew[1].url}
              target="_blank"
            >
              <img src={slicedNew[1].urlToImage} alt="secondNews" />
              <div className="news_firstLine_Content">
                <h1>{slicedNew[1].title.substring(0, 27) + "..."}</h1>
                <p>{slicedNew[1].publishedAt.substring(0, 10)}</p>
              </div>
            </a>
          </div>
          <div className="news_firstLine_cardColumn">
            <a
              className="news_firstLine_thridCard"
              href={slicedNew[2].url}
              target="_blank"
            >
              <img src={slicedNew[2].urlToImage} alt="thirdNew" />
              <div className="news_firstLine_Content">
                <h1>{slicedNew[2].title.substring(0, 30) + "..."}</h1>
                <p>{slicedNew[2].publishedAt.substring(0, 10)}</p>
              </div>
            </a>
            <a
              className="news_firstLine_fourCard"
              href={slicedNew[3].url}
              target="_blank"
            >
              <img src={slicedNew[3].urlToImage} alt="fourNew" />
              <div className="news_firstLine_Content">
                <h1>{slicedNew[3].title.substring(0, 30) + "..."}</h1>
                <p>{slicedNew[3].publishedAt.substring(0, 10)}</p>
              </div>
            </a>
          </div>
        </div>
      ) : (
        <div className="news_container_firstLine">
          <img
            className="news_loader"
            src="https://feccoo-madrid.org/f4404720ece11355df318a0acf525cb1000063.gif"
            alt="loading"
          />
        </div>
      )}
      <div className="news_paginated">
        <button className="news_button_paginated" onClick={buttonHandler2}>
          Prev
        </button>
        <p>{page}</p>
        <button className="news_button_paginated" onClick={buttonHandler}>
          Next
        </button>
      </div>
    </div>
  );
};

export default News;
