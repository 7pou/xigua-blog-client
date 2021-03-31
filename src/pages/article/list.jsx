import { fetchArticleList } from '@/services/article';
import { parseTime } from '@/utils/date';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import './index.scss'
const renderArticleItem = (props) => {

  


  return (
    <Link to={'/article/' + props.id } key={props.id}>
      <div className="article-item">
        <div className="title app-ellipsis">{props.title}</div>
        <div className="content app-ellipsis-multi ">{props.content}</div>
        <div className="tags">
          <span className="tag-item">react</span>
          <span className="tag-item">vue</span>
          <span className="tag-item">Array实现</span>
          <span className="tag-item">webpack</span>
        </div>
        <div className="app-flex statistic">
          <div className="app-flex item">
            <span className="iconfont icon-browse"></span>
            <span>{props.view_count || 0}</span>
          </div>
          <div className="app-flex item">
            <span className="iconfont icon-time"></span>
            <span>{parseTime(props.create_time)}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

const ArticleList = (props) => {

  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    
    fetchArticleList().then(res => {
      setArticleList(res.data)
    })
  }, []);
  return (
    
    <div className="article-list">
      {articleList.map(e => renderArticleItem(e))}
    </div>
  )
}

export default ArticleList