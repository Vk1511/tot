import React,{ useEffect,useState } from 'react';
import { Routes, Route, useParams } from "react-router-dom";
import { fetchPhotos } from '../Services/fetchPhotos';

const Galary = () => {
  const { albumId } = useParams();
  const [photos,setPhotos] = useState<any>();

  useEffect(() => {
    fetchPhotos(albumId).then((data) => {
      setPhotos(data);
    })
  },[])

  return (
    <div className="img-gallry">
      {
        photos?.map((img:any,key :any) => {
          return(
            <img src={img.url} alt="img.title" className="galary-img" key={key}/>
          );
        })
      }
    </div>
  )
}

export default Galary;