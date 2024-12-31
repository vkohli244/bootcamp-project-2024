import React from 'react'
import style from './blogPreview.module.css'
import Image from "next/image"
import {Blog} from "@/app/blogData"
export default function BlogPreview(props: Blog)  {
    return (
        <div>
        <div className={style.container}>
          <h3> {props.title} </h3>
          <div>
            <p>{props.description}</p>
                    <p>{props.date}</p>
          </div>
          </div>
          </div>
      );
}