import React from 'react'
import Image from 'gatsby-image'
import {ImageThumbnailWrapper} from './styles'

export default function ImageThumbnail({isactive,onClick,image}){
   const handleClick=()=>{
       onClick(image);
   }
   return (
<ImageThumbnailWrapper 
onClick={handleClick
} isactive = {isactive}>
    <Image fluid={image.localFile.childImageSharp.fluid}  />
</ImageThumbnailWrapper>
    );
}