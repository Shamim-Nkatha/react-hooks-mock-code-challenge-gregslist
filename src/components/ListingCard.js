import React, { useState } from "react";

function ListingCard({listing, data, setData, id}) {

  const [favorited, setFavorited] = useState(false)
  const [deleted, setDeleted] = useState(false)

  function handleDelete(id) {
    setDeleted(true)
    const updatedData = data.filter( obj => obj !== listing)
    setData(updatedData)
    
    fetch(`http://localhost:6001/listings/${id}`,{
      method: 'DELETE'
    })
  }

  return (
    deleted ? null :
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favorited ? ( 
          <button onClick={() => setFavorited(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setFavorited(true)} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button id={id} onClick={(e) => {handleDelete(e.target.id)}} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;