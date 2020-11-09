import React from 'react'
import Image from 'gatsby-image';
import {ImageGalleryWrapper} from './styles'
import ImageThumbnail from './ImageThumbnail'
export function ImageGallery({images, selectedVariantImageId}){
    const [activeImageThumbnail,setActiveImageThumbnail] = React.useState(
        images.find(({id})=> id === selectedVariantImageId)|| images[0]
    );

    React.useEffect(()=>{
        setActiveImageThumbnail(
   images.find(({id}) => id === selectedVariantImageId )|| images[0])
    },[selectedVariantImageId,setActiveImageThumbnail,images])
   const handleClick = image =>{
       setActiveImageThumbnail(image);
   };
    return(
    <ImageGalleryWrapper>

   
     <div>
        <Image fluid={activeImageThumbnail.localFile.childImageSharp.fluid} />
    </div>
    <div>
        {images.map((image)=>{
            return (
                <ImageThumbnail key={image.id}  onClick={handleClick} isactive= {image.id === activeImageThumbnail.id}
                image={image} />
            )
        })}
    </div>
    </ImageGalleryWrapper>
    );
}
