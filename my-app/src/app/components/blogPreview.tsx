import React from 'react'
import style from './blogPreview.module.css'
import Image from "next/image"
import {Blog} from "@/app/blogData"
export default function BlogPreview(props: Blog)  {
    return (
        <div>
        <div className={style.blogPreview}>
            <div className ={style.Line}>
            <p className ={style.date}>{props.date}</p>
            </div>
          <h3 className = {style.title}> {props.title} </h3>
          <div>
            <p className ={style.description}>{props.description}</p>
            <p className = {style.readMore}> Read More {'\u003E'}</p>
          </div>
          </div>
          </div>
      );
}