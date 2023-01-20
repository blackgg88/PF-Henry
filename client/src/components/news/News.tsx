import { useEffect, useState } from "react";
import { NEWS_API_KEY } from "../../../config";


const api_key: string = NEWS_API_KEY;

interface NewsData {
  title: string;
  urlToImage: string;
  url: string;
  publishedAt: string;
}

 /* news.urlToImage ? (
            <div>
              <h1>{news.title}</h1>
              <img
                src={news.urlToImage}
                alt="imagen"
                width="200px"
                height="250px"
              />
            </div>*/

export const News = () => {

  const [news, setNews] = useState<NewsData[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=smarthome&sortBy=publishedAt&apiKey=${api_key}`
      );
      const data = await response.json();
      setNews(data.articles);
    };
    fetchNews();
  }, []);

  console.log(news)

  return (
    <div className="news_container">
      {
        (news.length>4)&&(

          <div className="news_container_firstLine">
        <div className="news_firstLine_cardRow">
          <div className="news_firstLine_firstCard">
            <img src={news[0].urlToImage} alt="firstNews" />
            <div className="news_firstLine_Content">
              <h1>{news[0].title.substring(0, 30) + '...'}</h1>
              <p>{news[0].publishedAt.substring(0,10)}</p>
            </div>
          </div>
          <div className="news_firstLine_secondCard">
            <img src={news[1].urlToImage} alt="secondNews" />
            <div className="news_firstLine_Content">
              <h1>{news[1].title.substring(0, 30) + '...'}</h1>
              <p>{news[1].publishedAt.substring(0,10)}</p>
            </div>
          </div>
        </div>
        <div className="news_firstLine_cardColumn">
          <div className="news_firstLine_thridCard">
            <img src={news[2].urlToImage} alt="thirdNew" />
            <div className="news_firstLine_Content">
              <h1>{news[2].title.substring(0, 30) + '...'}</h1>
              <p>{news[2].publishedAt.substring(0,10)}</p>
            </div>
          </div>
          <div className="news_firstLine_fourCard">
            <img src={news[3].urlToImage} alt="fourNew" />
            <div className="news_firstLine_Content">
              <h1>{news[3].title.substring(0, 30) + '...'}</h1>
              <p>{news[3].publishedAt.substring(0,10)}</p>
            </div>
          </div>
        </div>
      </div>
        )
      }
    </div>
  );
};

export default News;
