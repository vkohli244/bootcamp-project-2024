import React from 'react'
import style from './blogPreview.module.css'
import Image from "next/image"
import {Blog} from "@/app/blogData"
export default function BlogPreview(props: Blog)  {
    return (
        <div>
          <h3> {props.title} </h3>
          <div>
            <Image src="/KhaoSok1.jpg" alt="img" width={500} height={500} ></Image>
            <p>{props.description}</p>
                    <p>{props.date}</p>
          </div>
          </div>
      );
}