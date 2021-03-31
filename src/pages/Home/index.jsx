/*
 * @Author: zhao - 🍉
 * @Date: 2021-03-28 14:04:34
 * @LastEditors: zhao - 🍉
 * @LastEditTime: 2021-03-30 20:35:23
 * @Descripttion: 
 */
import React from 'react'
import Watermelon from "@/components/Watermelon";

import "./index.scss";
import { Link } from 'react-router-dom';
const Home = (props) => {

  return (
    <div className="home-page ">
      <div className="container app-flex">
        <div className="avatar-block">
          <Watermelon/>
        </div>
        <div className="desc-block">
          你好
        </div>
        <div className="menu-block">
          <div className="menu-list">
            <Link to="/article">
              <div className="menu-item">文章</div>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home