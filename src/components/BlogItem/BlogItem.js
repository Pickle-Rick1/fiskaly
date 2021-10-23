import React from 'react'
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import './BlogItem.styles.css'

export const BlogItem = ({alt, image, slug, title}) => {
    return (
        <li className="list__item">
            <Link to={`/${slug}`}>
                <GatsbyImage image={image}
                alt={alt} className="max-h-[200px]"
                />
                  <h3 className="font-semibold text-black max-w-4/5 text-center mt-2 capitalize sm:text-base text-sm">{title}</h3>
           </Link>
        </li>
    )
}
