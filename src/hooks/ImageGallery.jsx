import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import useFetch from './useFetch';
import shuffleArray from './shuffleArray';
import { useHistory } from 'react-router-dom';

const ImageGalleryComponent = ({ url }) => {
  const { data, loading, error } = useFetch(url);
  const [galleryImages, setGalleryImages] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (data) {
      const images = data.map(item => ({
        original: item.download_url,
        id: item.id // Asumiendo que item tiene un campo `id` único para cada imagen
      }));
      const imagesMix = shuffleArray(images);
      console.log(imagesMix)
      setGalleryImages(imagesMix);
    }
  }, [data]);

  const handleClick = (event) => {
    console.log(event.target.currentSrc)
    const imageUrl = event.target.currentSrc;
    const parts = imageUrl.split("/"); // Divide la URL por "/"
    const formattedUrl = parts.slice(4).join("/"); // Toma las partes desde la tercera posición y las une con "/"
    console.log(formattedUrl); 
    history.push(`/page2?q=${formattedUrl}`);

  };

  if (loading) {
    return <div >Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ImageGallery 
      items={galleryImages} 
      showPlayButton={false} 
      showFullscreenButton={false} 
      autoPlay 
      slideInterval={10000}
      onClick={handleClick}
    />
  );
};

export default ImageGalleryComponent;
