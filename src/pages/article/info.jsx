import { fetchArticleInfo } from '@/services/article';
import { parseTime } from '@/utils/date';
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

const ArticleInfo = (props) => {
  const [articleData, setarticleData] = useState({});
  const params = useParams()
  console.log(params)

  useEffect(() => {
    
    fetchArticleInfo({id: params.id}).then(res => {
      setarticleData(res.data)
    })
  }, [params.id]);

  return (
    <div className="article-info">
      <div className="title">{articleData.title}</div>
      <div className="time">
        <span>{parseTime(articleData.create_time)}</span>
        <span >阅读 {articleData.view_count}</span>
      </div>

      <div className="line"></div>
      <div className="content">
        {articleData.content}
      </div>
    </div>
  )
}



export default ArticleInfo