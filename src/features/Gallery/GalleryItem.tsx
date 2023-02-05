import React, { useEffect, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import { Link } from 'react-router-dom'
import Button from '../../common/Button/Button'
import './Gallery.scss'
import data from '../../data.json'

const GalleryItem = ({
    name,
    destination,
    id,
    addToFavourites,
    removeFromFavourites,
    favourites,
}) => {
    const [favourite, setFavourite] = useState(false);
    const url = `images/${destination}.jpg`;
    useEffect(() => {
        const checkIfFav = () => {
            const found = favourites.find((item) => item.id === id)
            if (found) {
                setFavourite(true)
            } else {
                setFavourite(false)
            }
        }
        checkIfFav()
    }, [favourites])

    const toggleFavourite = () => {
        if(!favourite) {
            addToFavourites(id)
        }
        if(favourite) {
            removeFromFavourites(id)
        }
    }

    return (
        <div className="gallery_item_container">
            <img className="gallery_item_img" src={url} alt={name} />
            <div className="gallery_item_title_container">
                <div className="gallery_item_title">
                    <h4>{name}</h4>
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
