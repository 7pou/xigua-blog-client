/*
 * @Author: zhao - 🍉
 * @Date: 2021-03-30 21:00:34
 * @LastEditors: zhao - 🍉
 * @LastEditTime: 2021-03-31 19:38:05
 * @Descripttion: 
 */

import request from "@/utils/request";



export function fetchArticleList (data) {
  return request({ url: '/article/list' , data})
}


export function fetchArticleInfo (data) {
  return request({ url: '/article/detail', data })
}

export function fetchArticleView (data) {
  return request({ url: '/article/view', data })
}