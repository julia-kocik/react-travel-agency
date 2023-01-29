import React, { useEffect, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import { Link } from 'react-router-dom'
import Button from '../../common/Button/Button'
import './Gallery.scss'
import data from '../../data.json'

const GalleryItem = ({ name, destination, id }) => {
    const [favourite, setFavourite] = useState(false);
    const [favourites, setFavourites] = useState([]);

    const url = `images/${destination}.jpg`;
    const trips = data;

    useEffect(() => {
        const found = trips.find(item => item.id=== id);
        setFavourites([...favourites, found]);
        const current = JSON.parse(localStorage.getItem('favourites'));
        const toAdd = current ? JSON.stringify([...current, found]) : JSON.stringify([found]);
        if(favourite) {
          if(current?.find(item => item.id===id)===undefined) {
          localStorage.setItem('favourites', toAdd);
          }
        } 
        if(!favourite) {
          const getFav = JSON.parse(localStorage.getItem('favourites'));
          const filtered = getFav.filter(item => item.id !== id);
          const toAdd = JSON.stringify(filtered);
          localStorage.setItem('favourites', toAdd);
        }
    }, [favourite])

    const toggleFavourite = () => {
        setFavourite(() => !favourite)
    }
    return (
        <div className="gallery_item_container">
            <img className="gallery_item_img" src={url} alt={name} />
            <div className="gallery_item_title_container">
                <div className="gallery_item_title">
                    <h3>{name}</h3>
                </div>
                <div className="gallery_action_container">
                    <Link to={`/trips/${id}`}>
                        <Button title="Explore" color="dark" />
                    </Link>
                    <div onClick={toggleFavourite}>
                        {favourite ? (
                            <AiFillHeart className="gallery_action_icon" />
                        ) : (
                            <AiOutlineHeart className="gallery_action_icon" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryItem
