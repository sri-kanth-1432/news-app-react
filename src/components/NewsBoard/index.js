import { useState,useEffect } from 'react';
import NewsItem from '../NewsItem';

const NewsBoard=({categories})=>{
    const [article,setArticle]=useState([])
    useEffect(()=>{
        const apiKey = process.env.REACT_APP_NEWS_API_KEY;
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${categories}&apiKey=${apiKey}`;
        fetch(url).then(response=>{if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
          }return response.json()}).then(data=>setArticle(data.articles)).catch(error => console.error(`Error fetching data: ${error.message}`));
    },[categories])
    
    return(
        <>
        <h2 className="text-center mt-3">Latest <span className="badge bg-danger">News</span></h2>
        <div className="d-flex flex-wrap justify-content-center">
        {article.map((item,index)=>{
            return <NewsItem key={index} title={item.title} description={item.description} fetchImage={item.urlToImage} url={item.url} />
        })}
        </div>
        </>
    )
}



export default NewsBoard






