import {request} from  "./request"

//mock api
import {fetch} from "./api";

export function getHomeMultiData(){
  return request({
    url:'/home/multidata'
  })
}

export function getHomeGoods(type,sell){
  return  fetch('/news/index', 'type=top&key=123456');
}